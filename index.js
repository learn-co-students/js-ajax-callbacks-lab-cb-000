function displayResults(data) {
  return "<ul>" + data.items.map(r => {
    return `<li>
      <h2><a href="${r.html_url}">${r.name}</a></h2>            
      <img src="${r.owner.avatar_url}" height="48" width="48">
      <p>Created by: <a href="${r.owner.html_url}">${r.owner.login}</a></p>
      <p>${r.description}</p>
      <p><a href="#" onclick="showCommits(this)" data-owner="${r.owner.login}" data-repository="${r.name}">Show Commits</a></p>
     </li>`
  }).join("") + "</ul>";
}

function searchRepositories() {
  var input = $("#searchTerms").val();
  $.get(`https://api.github.com/search/repositories?q=${input}`, function(data) {
    $("#results").html(displayResults(data));
  }).fail(displayError);
  console.log(`Searching for repositories with ${input}...`);
}

function showCommits(clicked) {
  $.get(`https://api.github.com/repos/${clicked.dataset.owner}/${clicked.dataset.repository}/commits`, function(data) {
    $("#details").html(displayCommits(data));
  }).fail(displayError);
}

function displayCommits(data) {
  return "<ul>" + data.map( r=> {
    return `<li>
        <p><strong>${r.commit.author.name}(${r.author.login})</strong></p>
        <img src="${r.committer.avatar_url}" width="48", height="48">
        <p>${r.sha}</p>
      </li>`
  }).join("") + "</ul>";
}

function displayError() {
  $("#errors").html(`<p style="color:red;">There was an error.</p>`); 
}

$(document).ready(function (){
});

