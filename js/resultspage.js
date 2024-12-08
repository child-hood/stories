//Project prototpye
//November 20


document.getElementById('submit-button').addEventListener('click', function() {
  resultHtml += '<p><a href="' + pageUrl + '">Share your scrapbook page</a></p>';
  
  var urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.has('result')) {
      var sharedResultDecodedUri = urlParams.get('result');
      var sharedDataString = decodeURIComponent(sharedResultDecodedUri);
      document.body.innerHTML += "<h1>Shared Data:</h1>" + sharedDataString;
  }
    // Get the file input and image display element
const fileInput = document.getElementById('imageInput');
const imageDisplay = document.getElementById('imageDisplay');

// When the file input changes (i.e., when a user selects a file)
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        
        // When the file is loaded, set it as the image source
        reader.onload = function(e) {
            imageDisplay.src = e.target.result; // Display the image
        };
        
        // Read the file as a data URL (base64 encoded string)
        reader.readAsDataURL(file);
    }
});

  
    
    var resultHtml='<h2>Your Childhood Story</h2>'+
  '<p><strong>Name: </strong>' +name+ '</p>'+
  '<iframe width="560" height="315" src="'+youtubeEmbed+'" frameborder="0" allowfullscreen></iframe>';
  
    document.body.innerHTML += resultHtml;
     // Append the results to the page
  

  
  // Add the link to share results in the HTML
  resultHtml += '<p><a href="' + pageUrl + '">Share your scrapbook page</a></p>';
  
  // Check if there's any shared data in the URL (query params)
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('result')) {
    // Get and decode the shared data from query parameters
    var sharedResultDecodedUri = urlParams.get('result');
    var sharedDataString = decodeURIComponent(sharedResultDecodedUri);
  
    document.body.innerHTML += "<h1>Shared Data:</h1>"+sharedDataString;
  
  } 
  window.location.href = 'resultspage.html?result=' + encodeURIComponent(resultHtml);

});