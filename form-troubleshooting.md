# 🔧 Form Submission Troubleshooting Guide

## 🚨 Common Issues & Solutions

### **Issue 1: URL Endpoint Problem**

**Problem**: Using `/dev` instead of `/exec` in the script URL
**Solution**: ✅ **FIXED** - Changed your URL to use `/exec`

**Before**: `https://script.google.com/macros/s/YOUR_ID/dev`  
**After**: `https://script.google.com/macros/s/YOUR_ID/exec`

---

### **Issue 2: Google Apps Script Deployment**

**Check these steps:**

1. **Redeploy your script**:

   - Go to Google Apps Script
   - Click "Deploy" → "Manage deployments"
   - Click the pencil icon to edit
   - Change version to "New version"
   - Click "Deploy"
   - Copy the NEW URL (it might have changed)

2. **Verify deployment settings**:
   - Type: Web app
   - Execute as: Me
   - Who has access: **Anyone** (this is crucial!)

---

### **Issue 3: Permissions**

**Run this test in Google Apps Script**:

```javascript
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
```

**Steps**:

1. Run this function in Apps Script editor
2. Grant all requested permissions
3. Check if a spreadsheet is created in your Google Drive

---

### **Issue 4: CORS Headers**

**Your script should have these functions** (✅ already in your code):

```javascript
function doOptions(e) {
  return ContentService.createTextOutput("").setHeaders({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
}
```

---

### **Issue 5: Browser Developer Tools Check**

**Test in browser console**:

```javascript
// Test your form submission directly
fetch(
  "https://script.google.com/macros/s/AKfycbxUSSRmIyVwmB7M0MmAoB2fwdwkIlbv5Wn6Lm7m8Sam/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      projectType: "Custom Kitchen Cabinets",
      projectDetails: "Test submission",
    }),
  }
)
  .then((response) => response.json())
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Error:", error));
```

---

## 🎯 **Step-by-Step Diagnosis**

### **Step 1: Check Google Apps Script Logs**

1. Go to Google Apps Script
2. Click "Executions" in the left sidebar
3. Look for any errors or failed executions

### **Step 2: Verify Spreadsheet Creation**

1. Check your Google Drive for "Lalos Carpentry - Contact Form Submissions"
2. If it exists, check if new rows are being added
3. If it doesn't exist, there's a permissions issue

### **Step 3: Test Form Manually**

1. Fill out your contact form
2. Open browser Developer Tools (F12)
3. Go to Console tab
4. Look for any error messages

### **Step 4: Check Network Requests**

1. Open Developer Tools → Network tab
2. Submit the form
3. Look for the request to your script URL
4. Check the response

---

## 🔍 **Expected Behavior**

**✅ Working correctly**:

- Form shows "Sending..." when submitting
- Success message appears after submission
- New row appears in Google Sheets
- Email notification is sent

**❌ Not working**:

- Form gets stuck on "Sending..."
- Error message appears
- No new rows in spreadsheet
- No email notifications

---

## 🚨 **Quick Fixes to Try**

1. **Generate new deployment**:

   - Delete current deployment
   - Create new deployment with new version
   - Update URL in your code

2. **Check script permissions**:

   - Run test function manually
   - Grant all permissions when prompted

3. **Verify email address**:

   - Make sure `miguela.restrepo@outlook.com` is correct in your script

4. **Test with simple data**:
   - Try submitting form with basic text only
   - Avoid special characters initially

---

## 📞 **If Still Not Working**

**Send me**:

1. Any error messages from browser console
2. Google Apps Script execution logs
3. The exact URL you're using
4. Screenshot of your deployment settings

**I can help you**:

- Debug the specific issue
- Create alternative solution
- Set up different form handler

---

## 🎯 **Next Steps After Fix**

Once working:

1. Test with various form inputs
2. Verify email notifications
3. Set up lead management workflow
4. Consider adding form analytics
