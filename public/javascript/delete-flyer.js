// const Flyer = require('../../models/Flyer')

async function deleteFlyer(id) {
    
    const response = await fetch(`/dashboard/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }


  //get all the data, .then, save all the data into a variable (including the id)
  //pull the variable



// Delete the clicked note
handleFlyerDelete = (e) => {
  if (e.target.matches('.delete-flyer-btn')){
    e.stopPropagation();
    console.log(this);
    const flyerId = e.target.getAttribute('id');
    console.log(flyerId);
   
    // if (activeFlyer.id === flyerId) {
    //   activeFlyer= {};
    // }
  
    deleteFlyer(flyerId).then(() => {
      // getAndRenderNotes();
      // renderActiveNote();
    });
  }
  // prevents the click listener for the list from being called when the button inside of it is clicked

};

document.querySelector('.flyer-table').addEventListener('click', handleFlyerDelete);


