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
    const data = JSON.parse(e.postData.contents);
    const doc = getSpreadsheet_();
    const sheet = doc.getSheetByName("Attendees") || doc.insertSheet("Attendees");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "WhatsApp",
        "School / University",
        "Category",
        "Wants to volunteer",
        "Volunteer Team",
      ]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.fullName || "",
      data.email || "",
      data.whatsapp || "",
      data.university || "",
      data.category || "",
      data.wantsToVolunteer ? "Yes" : "No",
      data.wantsToVolunteer ? (data.volunteerTeam || "") : "",
    ]);

    return jsonResponse_({ status: "success", type: "attendee" });
  } catch (error) {
    console.error("Registration submit failed: " + (error && error.stack ? error.stack : String(error)));
    return jsonResponse_({ status: "error", message: String(error) });
  }
}
