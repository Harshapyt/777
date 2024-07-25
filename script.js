// Function to handle login
function login() {
    const id = document.getElementById('login-id').value.trim();
    const password = document.getElementById('login-password').value.trim();
  
    // Check if ID and password match the specified credentials
    if (id && password === '777pyt') {
      // Hide login form and show main page
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('main-page').classList.remove('hidden');
    } else {
      // Display error message for incorrect credentials
      document.getElementById('login-error').textContent = 'Invalid ID or password.';
    }
  }
  
  // Function to handle logout
  function logout() {
    // Show login form and hide main page
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
  
    // Clear input fields and error messages
    document.getElementById('login-id').value = '';
    document.getElementById('login-password').value = '';
    document.getElementById('login-error').textContent = '';
  }
  