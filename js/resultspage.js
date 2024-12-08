document.addEventListener('DOMContentLoaded', function() {
  // Retrieve stored submissions from localStorage
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

  // Function to display the latest submission or show a message if none
  function displayResults() {
      const container = document.getElementById('results-container');
      
      // Clear the container first
      container.innerHTML = '';

      if (submissions.length === 0) {
          container.innerHTML = '<p>No submissions yet!</p>';
          return;
      }

      // For now, we will only show the latest submission
      const submission = submissions[submissions.length - 1]; // Get the most recent submission

      // Create elements for displaying the submission
      const submissionDiv = document.createElement('div');
      submissionDiv.classList.add('submission');

      const name = document.createElement('h3');
      name.innerText = `Submitted by: ${submission.name}`;
      submissionDiv.appendChild(name);

      const story = document.createElement('p');
      story.innerText = `Story: ${submission.story}`;
      submissionDiv.appendChild(story);

      const photo = document.createElement('img');
      photo.src = submission.photo;
      photo.alt = 'User Submitted Photo';
      photo.style.maxWidth = '80%';
      submissionDiv.appendChild(photo);

      // Append the submissionDiv to the container
      container.appendChild(submissionDiv);
  }

  // Call the displayResults function to show the results when the page is loaded
  displayResults();
});
function downloadResults() {
  // Get your results as a string or data you want to download
  var results = "Your results here"; // Replace with actual results

  // Create a Blob from the results string
  var blob = new Blob([results], { type: 'text/plain' });

  // Create a download link
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  
      link.download = 'results.txt'; // Set the filename

    // Simulate a click on the link to start the download
    link.click();

    // Clean up by revoking the object URL (optional)
    URL.revokeObjectURL(link.href);
}

