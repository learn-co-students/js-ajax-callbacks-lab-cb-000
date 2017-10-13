function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function showRepositories(repos) {
  const repoList = '<ul>' + repos.items.map(r => {
    return (
      `<li>
        <h2><a href="${r.html_url}">${r.name}</a></h2>
        <p><strong>Description:</strong></p>
        <p>${r.description}</p>
        <p><img src="${r.owner.avatar_url}" alt="" width="32" height="32"></p>
        <p><strong>Owner:</strong> <a href="${r.owner.html_url}">${r.owner.login}</a></p>
        <p><a href="#" data-repository="${r.name}" data-owner="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
      </li>`
    )
  }).join('') + '</ul>'

  $("#results").html(repoList)
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  const url = `https://api.github.com/search/repositories?q=${searchTerms}`

  $.get(url, (data) => {
      showRepositories(data)
    }).fail((error) => {
      displayError()
    })
}

function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  const url = `https://api.github.com/repos/${owner}/${repo}/commits`

  $.get(url, (data) => {
    commitsList(data)
  }).fail((error) => {
    displayError()
  })
}

function commitsList(data) {
  const commits = '<ul>' + data.map(r => {
    return (
      `<li>
        <h2>Autor: ${r.commit.author.name}</h2>
        <p>GitHub Name: ${r.author.login}</p>
        <p><img src="${r.author.avatar_url}" alt="" width="32" height="32"></p>
        <p>SHA: ${r.sha}</p>
      </li>`
    )
  }).join('') + '</ul>'

  $("#details").html(commits)
}

$(document).ready(function (){
});
