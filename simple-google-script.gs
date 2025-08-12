/**
 * SIMPLE Google Apps Script - Easier to Debug
 * Copy this to a NEW Google Apps Script project
 */

function doPost(e) {
  // Log everything for debugging
  console.log("doPost called");
  console.log("Event object:", e);

  try {
    // Check if we have post data
    if (!e.postData) {
      console.log("No postData found");
      return createResponse(false, "No data received");
    }

    console.log("PostData contents:", e.postData.contents);

    // Parse the data
    const data = JSON.parse(e.postData.contents);
    console.log("Parsed data:", data);

    // Create or get spreadsheet
    const spreadsheet = getSpreadsheet();
    console.log("Got spreadsheet:", spreadsheet.getName());

    // Add data to sheet
    const sheet = spreadsheet.getActiveSheet();
    const timestamp = new Date();

    const row = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.projectType || "",
      data.projectDetails || "",
      data.phone || "",
    ];

    console.log("Adding row:", row);
    sheet.appendRow(row);
    console.log("Row added successfully");

    return createResponse(true, "Success");
  } catch (error) {
    console.error("Error in doPost:", error.toString());
    return createResponse(false, "Error: " + error.toString());
  }
}

function doGet(e) {
  // This handles GET requests (for testing)
  return createResponse(true, "Script is running");
}

function createResponse(success, message) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString(),
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    });
}

function doOptions(e) {
  return createResponse(true, "CORS preflight");
}

function getSpreadsheet() {
  const name = "Lalos Carpentry Forms - SIMPLE";

  // Try to find existing
  const files = DriveApp.getFilesByName(name);
  if (files.hasNext()) {
    return SpreadsheetApp.openById(files.next().getId());
  }

  // Create new
  const ss = SpreadsheetApp.create(name);
  const sheet = ss.getActiveSheet();

  // Add headers
  sheet
    .getRange(1, 1, 1, 7)
    .setValues([
      [
        "Timestamp",
        "First Name",
        "Last Name",
        "Email",
        "Project Type",
        "Project Details",
        "Phone",
      ],
    ]);

  return ss;
}

// Test function - RUN THIS FIRST
function testScript() {
  console.log("Testing script...");

  // Test spreadsheet creation
  const ss = getSpreadsheet();
  console.log("Spreadsheet created/found:", ss.getName());

  // Test data insertion
  const testData = {
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    projectType: "Test Project",
    projectDetails: "This is a test",
    phone: "555-1234",
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(e);
  console.log("Test result:", result.getContent());

  return "Test completed - check logs";
}
