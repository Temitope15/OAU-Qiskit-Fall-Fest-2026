/**
 * Qiskit Fall Fest OAU — registration backend (Google Apps Script web app).
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │ AFTER EDITING, YOU MUST REDEPLOY THE SAME DEPLOYMENT (keeps the URL):   │
 * │   Deploy ▸ Manage deployments ▸ (pencil) Edit ▸ Version: "New version"  │
 * │   ▸ Deploy                                                              │
 * │ Creating a *new* deployment changes the /exec URL and the website will │
 * │ still point at the old one.                                            │
 * └───────────────────────────────────────────────────────────────────────┘
 *
 * The website submits with `fetch(..., { mode: "no-cors" })`, so the browser
 * can never read this response — it always looks like "success" on the front
 * end. That means failures are invisible there. To actually see what happened,
 * open  Apps Script ▸ Executions  (every run + any thrown error is logged),
 * or open the /exec URL in a browser to hit doGet() as a health check.
 */

/**
 * Only needed if this Apps Script project is NOT bound to the spreadsheet
 * (i.e. a standalone project). Paste your Spreadsheet ID between the quotes.
 * You can find it in the sheet URL:
 *   https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
 * If the script was created from the sheet (Extensions ▸ Apps Script), leave
 * this empty and getActiveSpreadsheet() is used.
 */
const SHEET_ID = "";

function getSpreadsheet_() {
  if (SHEET_ID) {
    const byId = SpreadsheetApp.openById(SHEET_ID);
    if (!byId) throw new Error("SHEET_ID is set but no spreadsheet was found for it.");
    return byId;
  }
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (!active) {
    throw new Error(
      "No spreadsheet found. This script is not bound to a sheet. " +
      "Set SHEET_ID at the top of the script to your Spreadsheet ID."
    );
  }
  return active;
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Append a row, creating the sheet (with headers) on first use. */
function appendToSheet_(doc, sheetName, headers, row) {
  const sheet = doc.getSheetByName(sheetName) || doc.insertSheet(sheetName);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  sheet.appendRow(row);
  return sheet;
}

/**
 * Health check. Opening the /exec URL in a browser is a GET, so this prevents
 * the "Script function not found: doGet" error and confirms the deployment is
 * live and up to date.
 */
function doGet() {
  return jsonResponse_({
    status: "ok",
    message: "Qiskit Fall Fest OAU registration endpoint is live. Submit with POST.",
    time: new Date().toISOString(),
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No POST body received.");
    }

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      throw new Error("Body was not valid JSON: " + String(parseError));
    }

    const formType = data.type; // "hackathon" or "attendee"
    const doc = getSpreadsheet_();

    if (formType === "hackathon") {
      const teammates = Array.isArray(data.teamMembers) ? data.teamMembers : [];
      const fmt = (t) => (t && t.name ? t.name + " (" + (t.email || "") + ") - " + (t.role || "") : "");

      appendToSheet_(
        doc,
        "Hackathon",
        [
          "Timestamp", "Full Name", "Email", "WhatsApp",
          "University", "Course of Study", "Level", "Stack",
          "Target Industry", "Participation Mode", "Team Name",
          "Teammate 1", "Teammate 2", "Teammate 3", "Teammate 4",
        ],
        [
          new Date().toISOString(),
          data.fullName || "", data.email || "", data.whatsapp || "", data.university || "",
          data.department || "", data.level || "", data.stack || "", data.targetIndustry || "",
          data.participationMode || "", data.teamName || "",
          fmt(teammates[0]), fmt(teammates[1]), fmt(teammates[2]), fmt(teammates[3]),
        ]
      );

    } else if (formType === "attendee") {
      appendToSheet_(
        doc,
        "Attendees",
        [
          "Timestamp", "Full Name", "Email", "WhatsApp",
          "School / University", "Category", "Wants to volunteer", "Volunteer Team",
        ],
        [
          new Date().toISOString(),
          data.fullName || "", data.email || "", data.whatsapp || "", data.university || "",
          data.category || "",
          data.wantsToVolunteer ? "Yes" : "No",
          data.wantsToVolunteer ? (data.volunteerTeam || "") : "",
        ]
      );

    } else {
      // Don't lose anything: capture unexpected payloads, then flag it.
      appendToSheet_(
        doc,
        "Unknown submissions",
        ["Timestamp", "Reported type", "Raw payload"],
        [new Date().toISOString(), String(formType), e.postData.contents]
      );
      throw new Error("Unknown form type: " + String(formType));
    }

    return jsonResponse_({ status: "success", type: formType });

  } catch (error) {
    // Visible in Apps Script ▸ Executions even though no-cors hides it from the site.
    console.error("Registration submit failed: " + (error && error.stack ? error.stack : String(error)));
    return jsonResponse_({ status: "error", message: String(error) });
  }
}
