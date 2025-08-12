# 🚀 Simple Google Apps Script Setup Guide

## 📋 **Step-by-Step Instructions**

### **Step 1: Create New Google Apps Script**

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default `myFunction()` code
4. Copy and paste the code from `improved-google-script.gs`

### **Step 2: Run Test Function**

1. In the Apps Script editor, select `testFunction` from the dropdown
2. Click the "Run" button (▶️)
3. **Grant all permissions** when prompted:
   - Access to Google Sheets
   - Access to Google Drive
   - External requests
4. Check the execution log for "Test completed successfully"

### **Step 3: Deploy as Web App**

1. Click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ next to "Type"
3. Select "Web app"
4. Configure:
   - **Description**: "Lalos Carpentry Contact Form"
   - **Execute as**: "Me (your-email@gmail.com)"
   - **Who has access**: "Anyone" ⚠️ **IMPORTANT!**
5. Click "Deploy"
6. Copy the "Web app URL" (ends with `/exec`)

### **Step 4: Update Your Website**

1. Open your `page.js` file
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL =
     "https://script.google.com/macros/s/AKfycbxUSSRmIyVwmB7M0MmAoB2fwdwkIlbv5Wn6Lm7m8Sam/exec";
   ```
3. Replace with your new Web app URL

### **Step 5: Create the Spreadsheet**

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. **Rename it**: "Lalos Carpentry - Contact Forms"
4. **Rename the first sheet**: "LalosLeads"
5. The script will automatically add headers when first form is submitted

## ✅ **Testing Your Setup**

### **Browser Console Test**

1. Open your website
2. Press `F12` → Console tab
3. Paste this code:

```javascript
// Test your form submission
fetch("YOUR_SCRIPT_URL_HERE", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName: "Test",
    lastName: "User",
    email: "test@example.com",
    phone: "555-1234",
    projectType: "Custom Kitchen Cabinets",
    projectDetails: "Test submission",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("✅ Success:", data))
  .catch((error) => console.error("❌ Error:", error));
```

### **Expected Results**

- ✅ Console shows: `✅ Success: {success: true, message: "Form submitted successfully"}`
- ✅ New row appears in your Google Sheet
- ✅ Form shows success message

## 🐛 **Common Issues & Fixes**

### **Issue: "Access denied" or 403 error**

**Fix**: Check deployment settings

- Execute as: "Me"
- Who has access: "Anyone"

### **Issue: "Script function not found"**

**Fix**: Make sure you saved the script (Ctrl+S)

### **Issue: "No sheet named LalosLeads"**

**Fix**: Either:

1. Create sheet manually, OR
2. The script will create it automatically on first submission

### **Issue: CORS errors**

**Fix**: The improved script includes proper CORS headers

## 📊 **Your Google Sheet Structure**

| Timestamp        | First Name | Last Name | Email          | Phone    | Project Type     | Project Details     |
| ---------------- | ---------- | --------- | -------------- | -------- | ---------------- | ------------------- |
| 2025-01-27 10:30 | John       | Doe       | john@email.com | 555-1234 | Kitchen Cabinets | Custom oak cabinets |

## 🎯 **Next Steps After Setup**

1. **Test the form** on your website
2. **Verify data** appears in Google Sheets
3. **Set up email notifications** (optional)
4. **Add data validation** (optional)
5. **Create lead management workflow**

## 📞 **If You Still Have Issues**

**Check these in order**:

1. Browser console for error messages
2. Google Apps Script execution log
3. Google Sheet for new rows
4. Deployment settings in Apps Script

**Send me**:

- Any error messages from browser console
- Screenshot of your deployment settings
- The exact URL you're using

This simplified approach should work much more reliably! 🚀
