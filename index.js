var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")

var renderCommit = (commit) => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}

var renderCommits = (data) => {
  let result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var showCommits = (el) => {
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(renderCommits(data))
  }).fail(error => {
    displayError()
  })
}

var renderSearchResult = (result) => {
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
}

var renderSearchResults = (data) => data.items.map( result => renderSearchResult(result))

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}

$(document).ready(function (){
});


/*$(document).ready(function(){
  $('#ser').on('click', function(){
    searchRepositories();
  });
});

function searchRepositories(){
  var searchTerm = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${searchTerm}`;
  $.get(url, function(data){
      console.log(data.items);
      const repos = data.items;
      const repoTemplate = $("#repo-template").html();
     console.log(repoTemplate);
     const template = Handlebars.compile(repoTemplate);
     const repoList = template(repos);
      $('#results').html("
      <div class="repoResults"");

  }).fail(function(error){
    displayError(error);
  });;
}

function showCommits(tag){

  var name = tag.dataset.repo;
  var owner = tag.dataset.owner;
  var avatar = "https://github.com/" + owner + ".png";
  console.log(name + owner);
  var url = `https://api.github.com/repos/${owner}/${name}/commits`;
  $.get(url, function(res){
    console.log(res);

    const commitTemplate = $('#commit-template').html();
    const template = Handlebars.compile(commitTemplate);
    const commitList = template(res);
    $('#details').html(commitList);

  }).fail(function(error){
    displayError();
  });
}

function displayError(){
  $('#errors').html("I'm sorry, there was an error.");

}
*/
