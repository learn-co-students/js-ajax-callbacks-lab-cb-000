function searchRepositories(){
  let search = $("#search").val();
  let url = `https://api.github.com/search/repositories?q=${search}`
  console.log(url)
  $.get(url, data => {
    let results = $("#results")
    results.html(renderResults(data))
  }).fail(error => {
    displayError()
  })

}

var renderResults = (data) => data.items.map( result => renderResult(result))

function renderResult(data){
  return `
      <div>
        <h2><a href="${data.html_url}">${data.name}</a></h2>
        <p><a href="#" data-repository="${data.name}" data-owner="${data.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${data.description}</p>
      </div>
      <hr>
    `
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

var renderCommit = (commit) => {
  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`
}

var renderCommits = (data) => {
  let result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

var showCommits = (el) => {
  console.log(el)
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data => {
    $('#details').html(renderCommits(data))
  }).fail(error => {
    displayError()
  })
}





$(document).ready(function (){
});
