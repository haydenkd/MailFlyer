async function newFormHandler(event) {
  event.preventDefault();

  const recipient = document.querySelector('input[id="email"]').value;
  const type = document.querySelector('#flyerChoice').value;
  const frequency = document.querySelector('#duration').value;

  sessionStorage.setItem("recipient", recipient)
  sessionStorage.setItem("type", type)
  sessionStorage.setItem("schedule", frequency)

  console.log("\n\n");
  console.log("\n\n");
  console.log("\n\n");
  console.log(recipient);
  console.log(type);
  console.log(frequency);
  console.log("\n\n");
  console.log("\n\n");
  console.log("\n\n");

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