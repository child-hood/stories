//Project prototpye
//November 20

// Initialize scrapbook data
const scrapbookData = [];

// Function to generate a scrapbook page
function generateScrapbook() {
    // Get user input values
    const name = document.getElementById("name").value;
    const imagesInput = document.getElementById("images");
    const youtubeLink = document.getElementById("youtubeLink").value;
    const location = document.getElementById("location").value;
    const song = document.getElementById("song").value;
    const story = document.getElementById("story").value;



 // Check if YouTube link is from YouTube and retrieve video ID or fail gracefully
  if (youtubeLink.startsWith("https://www.youtube.com/watch?v=")) {
    const videoId = youtubeLink.split("v=")[1];
    // Use video ID to create embedded YouTube player
  } else {
    // Handle invalid YouTube link
  }
// Create image elements for uploaded images
const images = Array.from(imagesInput.files).map(file => {
  const imageElement = document.createElement("img");
  imageElement.src = URL.createObjectURL(file);
  return imageElement;
});

// Function to create an embedded YouTube player with autoplay enabled


// Function to initialize Google Map API if not already done
function initMap() {
    // Your initialization code here
}
$('button').click(function () {
    $('body').fadeOut(1000, function() {
      window.location.href = 'http://github.com/child-hood/stories/resultspage';
    });
  });   
}