$(document).ready(function (){
});

function searchRepositories(){
  let query = document.getElementById("searchTerms").value
  const apiQuery = 'https://api.github.com/search/repositories?q=' + query
  $.get(apiQuery, function (response) {
      let resultsArr = []
      for (const item of response.items) {
          let projectHash = {}
          projectHash.repository = item.name
          projectHash.description = item.description
          projectHash.link = item.html_url
          projectHash.avatar = item.owner.avatar_url
          projectHash.owner = item.owner.login
          projectHash.profile = item.owner.html_url
          projectHash.commitsUrl = item.commits_url;
          projectHash.gitCommitsUrl = item.git_commits_url;
          resultsArr.push(projectHash)
       }
      displayData(resultsArr)
  }).fail(function () {
      displayError()
  });
}
