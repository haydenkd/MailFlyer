// all of this needs to be redone with the inputs from the actual flyer form

async function newFormHandler(event) {
    event.preventDefault();
  
    const recipient = document.querySelector('input[id="email"]').value;
    const type = document.querySelector('').value;
    const frequency = document.querySelector('').value;
  
    const response = await fetch(`/api/flyer`, {
      method: 'POST',
      body: JSON.stringify({
        recipient,
        type,
        frequency
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-flyer-form').addEventListener('submit', newFormHandler);