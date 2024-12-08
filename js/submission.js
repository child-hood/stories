document.getElementById('submit-button').addEventListener('click', function() {
  const userName = document.getElementById('name').value;
  const userStory = document.getElementById('story').value;
  const userPhoto = document.getElementById('images').files[0];

  // Ensure a name, story, and photo are submitted
  if (userName && userStory && userPhoto) {
      // Check if the uploaded file is an image
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validImageTypes.includes(userPhoto.type)) {
          alert('Please upload a valid image file (JPEG, PNG, GIF).');
          return; // Stop execution if the file type is invalid
      }

      // Convert photo to base64 (or store its file path if you prefer)
      const reader = new FileReader();
      reader.onloadend = function() {
          const photoData = reader.result;

          // Create a submission object
          const submission = {
              name: userName,
              story: userStory,
              photo: photoData // Store base64-encoded image
          };

          // Retrieve existing submissions from localStorage, or create an empty array
          const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

          // Add the new submission to the array
          submissions.push(submission);

          // Save the updated submissions array to localStorage
          localStorage.setItem('submissions', JSON.stringify(submissions));

          // Clear the input fields after submission
          document.getElementById('name').value = '';
          document.getElementById('story').value = '';
          document.getElementById('images').value = '';

          // Optionally, redirect the user to the submissions page
          window.location.href = 'submissions.html'; // This takes them to the submissions page
      };

      reader.readAsDataURL(userPhoto); // Convert the uploaded photo to base64
  } else {
      alert('Please fill in all fields and upload a photo!');
  }
});
