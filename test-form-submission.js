// Test your form submission in browser console
// Copy and paste this into your browser's developer console (F12 → Console)

async function testFormSubmission() {
  const testData = {
    name: "Test",
    lastName: "User", 
    email: "test@example.com",
    phoneNumber: "555-1234",
    projectType: "Custom Kitchen Cabinets",
    description: "This is a test submission to verify the connection"
  };

  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxwrpPcY_peD1DK_uYM10moRn7P5N4pfPZ8TQF-Ilvj6eVX_vyF1scPEFkBpjSfmurhpg/exec';

  console.log('🧪 Testing form submission...');
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

    const result = await response.text();
    console.log('✅ Server response:', result);

    if (result === "Success") {
      console.log('🎉 SUCCESS! Form submission worked!');
      console.log('📝 Check your Google Sheet for the new row');
    } else {
      console.error('❌ Server returned:', result);
    }

  } catch (error) {
    console.error('💥 Error details:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
  }
}

// Run the test
testFormSubmission();
