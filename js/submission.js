document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored submissions from localStorage (if any)
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Function to display all submissions
    function displaySubmissions() {
        const container = document.getElementById('submissions-container');
        
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
    }

    // Display all submissions when the page loads
    displaySubmissions();
});
