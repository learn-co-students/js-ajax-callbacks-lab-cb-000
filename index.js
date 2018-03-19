/* index.js */
function searchRepositories(event) { // include the event as parameter
  event.preventDefault(); // prevent the page from refreshing after submitting the form
  var searchTerms = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`;
  $.get(url, function(data) {
    displayRepositories(data) // give the displayRepositories() the data from the API
  }).fail(function(error) {
    displayError()
  })
}



function displayError() {
  $('div#errors').innerHTML = "<p>I'm sorry, there's been an error. Please try again.</p>"
}


function displayRepositories(data) { // get the data from the API
  var templateFn = Handlebars.compile(document.getElementById("repositories-template").innerHTML);
  var repos = templateFn(data); // the data is already a JSON object, no need to parse it again
  // alert(repos)
  document.getElementById('results').innerHTML = repos;
  // alert(document.getElementById('results').innerHTML)
}

// function searchCommits() {}

// function displayCommits() {}

$(document).ready(function (){

});
