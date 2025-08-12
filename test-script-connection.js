// Test your Google Apps Script connection
// Copy and paste this into your browser console (F12 → Console) to test

async function testGoogleScript() {
  const testData = {
    firstName: 'Test',
    lastName: 'User', 
    email: 'test@example.com',
    projectType: 'Custom Kitchen Cabinets',
    projectDetails: 'This is a test submission to verify the connection',
    phone: '555-123-4567'
  };

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxUSSRmIyVwmB7M0MmAoB2fwdwkIlbv5Wn6Lm7m8Sam/exec';

  console.log('🧪 Testing Google Apps Script connection...');
  console.log('📊 Test data:', testData);
  console.log('🔗 Script URL:', scriptUrl);

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
      mode: 'cors'
    });

    console.log('📡 Response status:', response.status);
    console.log('📋 Response ok:', response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Server response:', result);

    if (result.success) {
      console.log('🎉 SUCCESS! Form submission worked!');
      console.log('📝 Check your Google Sheets for the new row');
      console.log('📧 Check your email for notification');
    } else {
      console.error('❌ Server returned error:', result.message);
    }

  } catch (error) {
    console.error('💥 Error details:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      console.log('🔍 This is likely a CORS issue or incorrect URL');
    }
  }
}

// Run the test
testGoogleScript();
