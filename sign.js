document.getElementById('text-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the user inputs
    var userInput1 = document.getElementById('text-input-1').value;
    var userInput2 = document.getElementById('text-input-2').value;

    // Set the text overlays to the user inputs
    document.getElementById('text-overlay-1').textContent = userInput1;
    document.getElementById('text-overlay-2').textContent = userInput2;
  });
