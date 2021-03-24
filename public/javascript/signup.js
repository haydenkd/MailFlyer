async function signupFormHandler(event) {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // const permission = document.querySelector('#permission-signup');
    console.log(email);
    console.log(password);
  
    // if (username && email && password && permission) {
    if (email && password) {
      console.log(email);
      console.log(password);
      const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          // username,
          email,
          password
          // permission
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);