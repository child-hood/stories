//Project prototpye
//November 20

// Add the link to share results in the HTML
resultHtml += '<p><a href="' + pageUrl + '">Share your scrapbook page</a></p>';

var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('result')) {
    var sharedResultDecodedUri = urlParams.get('result');
    var sharedDataString = decodeURIComponent(sharedResultDecodedUri);
    document.body.innerHTML += "<h1>Shared Data:</h1>" + sharedDataString;
}
// JavaScript to handle form submission and display results
document.getElementById('submit-button').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  var location = document.getElementById('location').value;
  var song = document.getElementById('song').value;
  var story = document.getElementById("story").value;

  
  var resultHtml='<h2>Your Childhood Story</h2>'+
'<p><strong>Name: </strong>' +name+ '</p>'+
'<iframe width="560" height="315" src="'+youtubeEmbed+'" frameborder="0" allowfullscreen></iframe>';

  document.body.innerHTML += resultHtml; // Append the results to the page

});

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