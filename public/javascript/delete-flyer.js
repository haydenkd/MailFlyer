// const Flyer = require('../../models/Flyer')

async function deleteFlyer(id) {
    
    const response = await fetch(`../api/flyer/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

// Delete the clicked note
function handleFlyerDelete(e){
  if (e.target.matches('.delete-flyer-btn')){
    e.stopPropagation();
    // let test = e.target.closest('.delete-flyer-btn');
    // console.log(test);
    console.log(this);
    const flyerId = e.target.id;
    console.log(flyerId);
  
    deleteFlyer(flyerId).then(() => {
      // getAndRenderNotes();
      // renderActiveNote();
    });
  }
  // prevents the click listener for the list from being called when the button inside of it is clicked

};

document.querySelector('.flyer-table').addEventListener('click', handleFlyerDelete);


