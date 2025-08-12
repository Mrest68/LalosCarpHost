/**
 * Lalos Carpentry Contact Form Handler
 * This script receives form submissions and stores them in Google Sheets
 */

// Main function to handle form submissions
function doPost(e) {
  try {
    // Parse the form data
    const data = JSON.parse(e.postData.contents);

    // Get the spreadsheet (create one if it doesn't exist)
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();

    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.projectType || "",
      data.projectDetails || "",
      "New", // Status
      "", // Notes
      data.phone || "", // Optional phone field
    ];

    // Add the data to the sheet
    sheet.appendRow(rowData);

    // Send email notification (optional)
    sendEmailNotification(data, timestamp);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      });
  } catch (error) {
    // Log the error
    console.error("Error processing form submission:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error processing form submission",
      })
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
  const spreadsheetName = "Lalos Carpentry - Contact Form Submissions";

  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);

  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.openById(file.getId());
  } else {
    // Create new spreadsheet
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    const sheet = spreadsheet.getActiveSheet();

    // Set up headers
    const headers = [
      "Timestamp",
      "First Name",
      "Last Name",
      "Email",
      "Project Type",
      "Project Details",
      "Status",
      "Notes",
      "Phone",
    ];

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // Format the header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#3D2412");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");

    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // First Name
    sheet.setColumnWidth(3, 120); // Last Name
    sheet.setColumnWidth(4, 200); // Email
    sheet.setColumnWidth(5, 180); // Project Type
    sheet.setColumnWidth(6, 300); // Project Details
    sheet.setColumnWidth(7, 100); // Status
    sheet.setColumnWidth(8, 200); // Notes
    sheet.setColumnWidth(9, 120); // Phone

    return spreadsheet;
  }
}

function sendEmailNotification(data, timestamp) {
  try {
    // Email settings - UPDATE THESE WITH YOUR DETAILS
    const emailAddress = "miguela.restrepo@outlook.com"; // Your email
    const subject = `New Contact Form Submission - ${data.projectType}`;

    const emailBody = `
New contact form submission from Lalos Carpentry website:

Time: ${timestamp.toLocaleString()}
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Project Type: ${data.projectType}
Project Details: ${data.projectDetails}

Please follow up with this potential client within 24 hours.

Best regards,
Lalos Carpentry Website
    `;

    // Send the email
    MailApp.sendEmail(emailAddress, subject, emailBody);
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
}

// Test function for development
function testFormSubmission() {
  const testData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    projectType: "Custom Kitchen Cabinets",
    projectDetails:
      "Looking for custom oak cabinets for my kitchen renovation.",
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(e);
  console.log(result.getContent());
}
