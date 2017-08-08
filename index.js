function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var terms = $('#searchTerms').val()
  const uri = "https://api.github.com/search/repositories?q=" + terms
  $.get(uri).done(function(data){
    displayRepositories(data);
  }).fail(function(error){
    displayError(error);
  })
}

function displayRepositories(data) {
  const repos = data.items;
  const src = $('#repository-template').html()
  const template = Handlebars.compile(src);
  const repoList = template(repos);
  $('#results').html(repoList);
}

function displayError(error){
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}
