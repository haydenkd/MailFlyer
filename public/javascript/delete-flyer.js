async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = await fetch()
    
    const response = await fetch(`/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-flyer-btn').addEventListener('click', deleteFormHandler);

  //get all the data, .then, save all the data into a variable (including the id)
  //pull the variable