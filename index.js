function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`;
  $.get(url, function(data) {
    displayRepositories()
  }).fail(function(error) {
    displayError()
  })
}



function displayError() {
  $('div#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>")
}


function displayRepositories() {
  var templateFn = Handlebars.compile(document.getElementById("repositories-template").innerHTML);
  var repos = templateFn(JSON.parse(this));
  alert(repos)
  document.getElementById('results').innerHTML = repos;
  alert(document.getElementById('results').innerHTML)
}

// function searchCommits() {}

// function displayCommits() {}

$(document).ready(function (){

});
