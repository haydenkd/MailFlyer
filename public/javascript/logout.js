async function logout() {
  const response = await fetch('/api/user/logout', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
    window.alert('You have been logged out!')
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);