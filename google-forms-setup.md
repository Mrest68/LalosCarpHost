# Google Forms Integration Setup for Lalos Carpentry

This guide will help you set up a Google Apps Script to handle contact form submissions from your website.

## **Step 1: Create Google Apps Script**

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script/Code.gs`
4. Save the project (Ctrl+S) and name it "Lalos Carpentry Contact Form"

## **Step 2: Configure Email Settings**

In the Google Apps Script editor, update this line with your email:

```javascript
const emailAddress = "miguela.restrepo@outlook.com"; // Your email
```

## **Step 3: Deploy as Web App**

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set these configurations:
   - **Description**: "Lalos Carpentry Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for your website

## **Step 4: Update Your Website**

1. Open `src/components/ContactForm.js`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL:

```javascript
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

## **Step 5: Replace the Contact Form in page.js**

Replace the current contact form section in your `page.js` file with:

```javascript
import ContactForm from "../components/ContactForm";

// In your JSX, replace the current form with:
<ContactForm />;
```

## **Step 6: Test the Integration**

1. Submit a test form on your website
2. Check your Google Drive for a new spreadsheet called "Lalos Carpentry - Contact Form Submissions"
3. Verify you receive an email notification
4. Check that the form data appears in the spreadsheet

## **Features Included**

✅ **Google Sheets Storage**: All submissions are automatically saved to a spreadsheet
✅ **Email Notifications**: You'll receive an email for each new submission
✅ **Form Validation**: Required fields are enforced
✅ **Success/Error Messages**: Users get feedback on their submission
✅ **Professional Formatting**: Spreadsheet is nicely formatted with headers
✅ **Status Tracking**: Built-in status column for follow-up management

## **Spreadsheet Columns**

Your Google Sheet will have these columns:

- Timestamp
- First Name
- Last Name
- Email
- Project Type
- Project Details
- Status (for tracking follow-ups)
- Notes (for your internal notes)
- Phone (optional field)

## **Managing Leads**

The spreadsheet includes a "Status" column where you can track:

- New (default)
- Contacted
- Quote Sent
- In Progress
- Completed
- Not Interested

## **Security Features**

- CORS enabled for your website
- Error handling for failed submissions
- Data validation before storage
- Automatic timestamping

## **Troubleshooting**

**Form not submitting?**

- Check that you've updated the GOOGLE_SCRIPT_URL
- Ensure the Google Apps Script is deployed with "Anyone" access
- Check browser console for error messages

**Not receiving emails?**

- Verify the email address in the script
- Check your spam folder
- Ensure the script has permission to send emails

**Spreadsheet not created?**

- Check that the script has permission to access Google Drive
- Run the script manually first to grant permissions

## **Next Steps**

After setup, consider:

1. Setting up automated email responses to customers
2. Creating a dashboard for better lead management
3. Integrating with a CRM system
4. Adding analytics tracking for form submissions

## **Support**

If you need help with the setup, the Google Apps Script documentation is available at:
https://developers.google.com/apps-script
