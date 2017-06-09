function renderSearchResult(result){
  return `
      <div>
        <h2><a href="${result.html_url}">${result.name}</a></h2>
        <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${result.description}</p>
      </div>
      <hr>
    `
}

function renderSearchResults(data){
  data.items.map( result => renderSearchResult(result))
}

function showRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get("https://api.github.com/search/repositories?q=${searchTerms}", function(data){
      $('#results').html(renderSearchResults(data))
    }).fail(function(error){
      displayError()
    })
    }

function renderCommit(commit){
  return "<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>"
}

function renderCommits(data){
  let result = data.map((commit)=>renderCommit(commit)).join('')
  return `<ul>${result}</ul>`
}

function showCommits(el){
      $.get("https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits", function(data){
        $('#details').html(renderCommits(data))
      }).fail(function(error){
        displayError()
      })
    }

function displayError(){
      $('#errors').html("I'm sorry, there's been an error. Please try again.")
    }
    
$(document).ready(function (){
});
