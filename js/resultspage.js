document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents default form submission

  const userName = document.getElementById('name').value;
  const userStory = document.getElementById('story').value;
  const userPhoto = document.getElementById('images').files[0];

  // Ensure a name, story, and photo are provided
  if (userName && userStory && userPhoto) {
      // Validate image type (only allow certain formats)
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(userPhoto.type)) {
          alert('Please upload a valid image file (JPEG, PNG, GIF).');
          return; // Stop execution if the file type is invalid
      }

      // Convert the image to base64 using FileReader
      const reader = new FileReader();
      reader.onloadend = function() {
          const photoData = reader.result;

          // Create a submission object
          const submission = {
              name: userName,
              story: userStory,
              photo: photoData // Save the base64 image
          };

          // Retrieve existing submissions from localStorage or create a new array
          const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

          // Add the new submission to the submissions array
          submissions.push(submission);

          // Save the updated submissions array back to localStorage
          localStorage.setItem('submissions', JSON.stringify(submissions));

          // Clear the form fields after submission
          document.getElementById('name').value = '';
          document.getElementById('story').value = '';
          document.getElementById('images').value = '';

          // Redirect to the results page
          const resultHtml = `
              <h2>Your Childhood Story</h2>
              <p><strong>Name: </strong>${userName}</p>
              <p><strong>Story: </strong>${userStory}</p>
              <img src="${photoData}" alt="Submitted Image" style="max-width: 80%;">
              <p><a href="submissions.html">Share your scrapbook page</a></p>
          `;

          // Redirect with the results as a URL parameter
          window.location.href = `resultspage.html?result=${encodeURIComponent(resultHtml)}`;
      };

      // Convert the photo to a data URL (base64 encoded)
      reader.readAsDataURL(userPhoto);
  } else {
      alert('Please fill in all fields and upload a photo!');
  }
});
