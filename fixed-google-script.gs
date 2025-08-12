function doPost(e) {
  try {
    const SPREADSHEET_ID = "1dL5JtEqz-68RV6JGyX65heErrV6ZKCBqYlbV8Ui41KA";
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet(); // You need to specify which sheet

    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(), // Timestamp first
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.projectType || "",
      data.projectDetails || "",
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "Success", status: 200 })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "Error", message: error.message })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

// Handle CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
