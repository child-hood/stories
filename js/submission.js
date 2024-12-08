document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored submissions from localStorage (if any)
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    console.log(submissions);  // Check the submissions data in console

    const container = document.getElementById('submissions-container');
    console.log(container);  // Check if the container is being found

    // Clear previous submissions
    container.innerHTML = '';

    // If there are no submissions, display a message
    if (submissions.length === 0) {
        container.innerHTML = '<p>No submissions yet!</p>';
        return;
    }

    // Loop through submissions and create elements for each
    submissions.forEach(submission => {
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

        container.appendChild(submissionDiv);
    });

    // Handle form submission to save data
    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents default form submission

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
                const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

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
});
