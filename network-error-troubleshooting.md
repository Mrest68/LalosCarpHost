# 🚨 Network Error Troubleshooting Guide

## 🎯 **Immediate Steps to Fix "Network Error"**

### **Step 1: Test Your Google Apps Script URL**

Open your browser and visit this URL directly (replace with your actual URL):

```
https://script.google.com/macros/s/AKfycbzSNdSyrrrmd9xCUdk1f9-aCBUsmQlqRtSy1HLhKKFixkNMIGiOt0G8toB6fcyFhe9U2A/exec
```

**Expected result**: You should see "Hello! This Web App accepts POST requests."

**If you get an error**: Your script isn't deployed properly.

---

### **Step 2: Check Your Google Apps Script Deployment**

1. **Go to your Google Apps Script project**
2. **Click "Deploy" → "Manage deployments"**
3. **Verify these settings**:

   - Type: Web app ✅
   - Execute as: Me ✅
   - Who has access: **Anyone** ⚠️ **CRITICAL!**

4. **If "Who has access" is NOT set to "Anyone"**:
   - Click the pencil icon to edit
   - Change to "Anyone"
   - Click "Deploy"
   - **Copy the NEW URL** (it might change)

---

### **Step 3: Test Your Script with Browser Console**

1. **Open your website**
2. **Press F12 → Console tab**
3. **Copy and paste this test code**:

```javascript
// Test your Google Apps Script directly
fetch(
  "https://script.google.com/macros/s/AKfycbzSNdSyrrrmd9xCUdk1f9-aCBUsmQlqRtSy1HLhKKFixkNMIGiOt0G8toB6fcyFhe9U2A/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Test",
      lastName: "User",
      email: "test@example.com",
      phoneNumber: "555-1234",
      projectType: "Test Project",
      description: "Test submission",
    }),
  }
)
  .then((response) => {
    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);
    return response.text();
  })
  .then((data) => {
    console.log("✅ Response data:", data);
    if (data === "Success") {
      console.log("🎉 SUCCESS! Check your Google Sheet for new row");
    }
  })
  .catch((error) => {
    console.error("❌ Error:", error);
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
  });
```

---

### **Step 4: Check Your Google Apps Script Code**

Your script should look like this:

```javascript
function doGet() {
  return ContentService.createTextOutput(
    "Hello! This Web App accepts POST requests."
  );
}

function doPost(e) {
  try {
    const SPREADSHEET_ID = "1dL5JtEqz-68RV6JGyX65heErrV6ZKCBqYlbV8Ui41KA";
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    const data = JSON.parse(e.postData.contents);
    Logger.log(data);

    sheet.appendRow([
      new Date(),
      data.name || "No Name",
      data.lastName || "No lastname",
      data.email || "No Email",
      data.phoneNumber || "No Phone Number",
      data.projectType || "",
      data.description || "",
    ]);

    return ContentService.createTextOutput("Success");
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.message);
  }
}
```

---

### **Step 5: Common Issues & Solutions**

#### **Issue: "Failed to fetch" error**

**Causes**:

- Script not deployed with "Anyone" access
- Wrong URL
- CORS issues

**Solution**: Redeploy with "Anyone" access

#### **Issue: 403 Forbidden**

**Cause**: Script access is restricted
**Solution**: Set "Who has access" to "Anyone"

#### **Issue: 404 Not Found**

**Cause**: Wrong URL or script not deployed
**Solution**: Check URL and redeploy

#### **Issue: Script runs but no data in sheet**

**Causes**:

- Wrong spreadsheet ID
- Sheet doesn't exist
- Permissions issue

**Solution**: Verify spreadsheet ID and permissions

---

### **Step 6: Verify Your Google Sheet**

1. **Check the spreadsheet ID**: `1dL5JtEqz-68RV6JGyX65heErrV6ZKCBqYlbV8Ui41KA`
2. **Make sure the sheet exists and you have edit access**
3. **Check if new rows are being added when you test**

---

### **Step 7: Alternative Quick Fix**

If nothing works, try creating a **completely new Google Apps Script**:

1. Go to script.google.com
2. Create new project
3. Copy the script code above
4. Save and deploy with "Anyone" access
5. Update your form with the new URL

---

## 🎯 **What to Do Next**

1. **Try the browser console test first** (Step 3)
2. **Check the deployment settings** (Step 2)
3. **Look at the specific error message** your form now shows
4. **Report back with**:
   - The console test results
   - Any specific error messages
   - Your deployment settings screenshot

The enhanced error messages in your form will now tell you exactly what's wrong! 🔍
