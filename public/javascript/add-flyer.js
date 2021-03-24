// all of this needs to be redone with the inputs from the actual flyer form

async function newFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[name="post-title"]').value;
    const postBody = document.querySelector('textarea[name="post-body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        postBody
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
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);