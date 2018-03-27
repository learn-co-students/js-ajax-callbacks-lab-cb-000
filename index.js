$(document).ready(function (){
  $('#search-link').on('click', searchRepositories);
});

function searchRepositories(){
  var searchTerms = document.getElementById('searchTerms').value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response){
    var resultsHTML = '<ul style = "list-style-type: none; ">' +  response.items.map(function(r){
      var liHTML = `  <li style = "border: 1px solid black; padding: 5px;">
                      <img width = '60' height = 60 src = "${r.owner.avatar_url}"/>
                      <h3>${r.name}</h3><p>Created by: ${r.owner.login}</p>
                      <h3>Description</h3>
                        <p>${r.description}</p>
                      <a href = "${r.html_url}">${r.name}</a>
                      <br>
                      <a href = "#" onclick = 'showCommits(this)' data-repo = "${r.name}" data-owner = "${r.owner.login}">show Commits</a>
                      <li>` ;
    return liHTML
    }).join('') + '</ul>';
    //using handlebars
    //var template = Handlebars.compile($('#repositories-template').html())
    //var resultsHTML = template(response.items)
    $('#results').html(resultsHTML)
    console.log(response)

  }).fail(function(error){
    displayError()
  })
}

function showCommits(element){
  var repo =  element.dataset.repository
  var owner = element.dataset.owner
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(response){
    var commitsHTML = '<ul style = "list-style-type: none;"> ' + response.map(function(c){
      var liHTML = ` <li style =  "border: 1px solid black; padding: 5px; ">
                      <p>SHA:          ${c.sha}</p>
                      <p>Author login: ${c.author.login}</p>
                      <p>Author Name:  ${c.commit.author.name}</p>
                    </li>` ;
      return liHTML
    }).join('') + '</ul>'

    //using handlebars
    //var template = Handlebars.compile($('#commits-template').html())
    //var commitsHTML = template(response)
    console.log(response)
    $('#details').html(commitsHTML)
  })
}

function displayError(error)
{
  $('#errors').html("<p>I'm sorry, there's been an error. Please try again.</p>")
}
