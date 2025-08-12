/**
 * Improved Google Apps Script for Lalos Carpentry
 * Copy this to your Google Apps Script editor
 */

function doPost(e) {
  try {
    // Get or create the spreadsheet and sheet
    const sheet = getOrCreateSheet();

    // Parse the form data
    const data = JSON.parse(e.postData.contents);

    // Log for debugging
    console.log("Received data:", data);

    // Add row to sheet
    sheet.appendRow([
      new Date(),
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.projectType || "",
      data.projectDetails || "",
    ]);

    console.log("Data added to sheet successfully");

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Form submitted successfully" })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch (err) {
    console.error("Error in doPost:", err);

    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

// Handle OPTIONS requests (CORS preflight)
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// Get or create the spreadsheet and sheet
function getOrCreateSheet() {
  let spreadsheet;

  try {
    // Try to get the active spreadsheet first
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  } catch (e) {
    // If no active spreadsheet, create a new one
    spreadsheet = SpreadsheetApp.create("Lalos Carpentry - Contact Forms");
  }

  // Get or create the "LalosLeads" sheet
  let sheet = spreadsheet.getSheetByName("LalosLeads");

  if (!sheet) {
    // Create the sheet if it doesn't exist
    sheet = spreadsheet.insertSheet("LalosLeads");

    // Add headers
    sheet
      .getRange(1, 1, 1, 7)
      .setValues([
        [
          "Timestamp",
          "First Name",
          "Last Name",
          "Email",
          "Phone",
          "Project Type",
          "Project Details",
        ],
      ]);

    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setBackground("#3D2412");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");

    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // First Name
    sheet.setColumnWidth(3, 120); // Last Name
    sheet.setColumnWidth(4, 200); // Email
    sheet.setColumnWidth(5, 120); // Phone
    sheet.setColumnWidth(6, 180); // Project Type
    sheet.setColumnWidth(7, 300); // Project Details
  }

  return sheet;
}

// Test function - Run this first to set up permissions
function testFunction() {
  console.log("Testing script setup...");

  // Test sheet creation
  const sheet = getOrCreateSheet();
  console.log("Sheet created/found:", sheet.getName());

  // Test data insertion
  const testData = {
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    phone: "555-1234",
    projectType: "Custom Kitchen Cabinets",
    projectDetails: "This is a test submission",
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(e);
  console.log("Test result:", result.getContent());

  return "Test completed successfully";
}
