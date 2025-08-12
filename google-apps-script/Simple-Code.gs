/**
 * Simple Google Apps Script for Lalos Carpentry Contact Form
 * Start with this basic version and expand as needed
 */

function doPost(e) {
  try {
    // Parse the incoming form data
    const data = JSON.parse(e.postData.contents);

    // Log the data (you can see this in Apps Script editor under Executions)
    console.log("Form submission received:", data);

    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    // Add the form data to the spreadsheet
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.projectType || "",
      data.projectDetails || "",
    ];

    sheet.appendRow(rowData);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Form submitted successfully" })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: "Error occurred" })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("").setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
}

function getOrCreateSpreadsheet() {
  const spreadsheetName = "Lalos Carpentry - Contact Forms";

  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);

  if (files.hasNext()) {
    return SpreadsheetApp.openById(files.next().getId());
  } else {
    // Create new spreadsheet with headers
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    const sheet = spreadsheet.getActiveSheet();

    // Add headers
    const headers = [
      "Timestamp",
      "First Name",
      "Last Name",
      "Email",
      "Project Type",
      "Project Details",
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#3D2412");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");

    return spreadsheet;
  }
}

// Test function - you can run this to test your setup
function testFunction() {
  console.log("Test function executed successfully!");

  // Test creating spreadsheet
  const spreadsheet = getOrCreateSpreadsheet();
  console.log("Spreadsheet created/found:", spreadsheet.getName());

  // Test adding sample data
  const sheet = spreadsheet.getActiveSheet();
  const testData = [
    new Date(),
    "John",
    "Doe",
    "john@example.com",
    "Custom Cabinets",
    "Test submission",
  ];
  sheet.appendRow(testData);

  console.log("Test data added successfully!");
}
