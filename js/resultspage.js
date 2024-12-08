document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally

  const userName = document.getElementById('name').value;
  const userStory = document.getElementById('story').value;
  const userPhoto = document.getElementById('images').files[0];

  // Ensure all fields are filled
  if (userName && userStory && userPhoto) {
      // Validate image type
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
              photo: photoData // Store base64-encoded image
          };

          // Retrieve existing submissions or create an empty array
          let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

          // Add the new submission to the array
          submissions.push(submission);

          // Save the updated submissions array to localStorage
          localStorage.setItem('submissions', JSON.stringify(submissions));

          // Clear the form fields after submission
          document.getElementById('name').value = '';
          document.getElementById('story').value = '';
          document.getElementById('images').value = '';

          // Optionally, redirect the user to the submissions page
          window.location.href = 'submissions.html'; // Redirect to display all submissions
      };

      // Read the uploaded photo as a data URL
      reader.readAsDataURL(userPhoto);
  } else {
      alert('Please fill in all fields and upload a photo!');
  }
});
