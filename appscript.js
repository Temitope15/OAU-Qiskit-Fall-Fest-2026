function doPost(e) {
  // Add headers for CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = JSON.parse(e.postData.contents);
    const formType = data.type; // "hackathon" or "volunteer"
    
    // Open the active spreadsheet
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    
    if (formType === "hackathon") {
      const sheet = doc.getSheetByName("Hackathon") || doc.insertSheet("Hackathon");
      
      // If the sheet is empty, add headers
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp", "Full Name", "Email", "WhatsApp", 
          "University", "Course of Study", "Level", "Stack", 
          "Target Industry", "Participation Mode", "Team Name", 
          "Teammate 1", "Teammate 2", "Teammate 3", "Teammate 4"
        ]);
      }
      
      // Format teammate strings
      const teammates = data.teamMembers || [];
      const team1 = teammates[0] ? `${teammates[0].name} (${teammates[0].email}) - ${teammates[0].role}` : "";
      const team2 = teammates[1] ? `${teammates[1].name} (${teammates[1].email}) - ${teammates[1].role}` : "";
      const team3 = teammates[2] ? `${teammates[2].name} (${teammates[2].email}) - ${teammates[2].role}` : "";
      const team4 = teammates[3] ? `${teammates[3].name} (${teammates[3].email}) - ${teammates[3].role}` : "";

      sheet.appendRow([
        new Date().toISOString(),
        data.fullName,
        data.email,
        data.whatsapp,
        data.university,
        data.department,
        data.level,
        data.stack,
        data.targetIndustry,
        data.participationMode,
        data.teamName || "",
        team1, team2, team3, team4
      ]);
      
    } else if (formType === "volunteer") {
      const sheet = doc.getSheetByName("Volunteers") || doc.insertSheet("Volunteers");
      
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Timestamp", "Full Name", "Email", "WhatsApp", 
          "University", "Preferred Role"
        ]);
      }
      
      sheet.appendRow([
        new Date().toISOString(),
        data.fullName,
        data.email,
        data.whatsapp,
        data.university,
        data.preferredRole
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// Handle preflight OPTIONS requests for CORS
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
