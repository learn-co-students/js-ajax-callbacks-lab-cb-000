$(document).ready(function (){
});
function searchRepositories() {
  var searchTerms = document.getElementById('searchTerms').value
  var url = "https://api.github.com/search/repositories?q=" + searchTerms
  $.get(url, function(data){
    var list = `<ul>${data.items.map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a> -' + r.owner.login + '- <a href="#" data-repository="'+ r.name + '" data-owner="' + r.owner.login + '" onclick="showCommits(this)">Get Commits</a></li>').join('')}</ul>`
    $("#results").html(list)
  }).fail(displayError(error));
}
function displayError(error) {
  $("#errors").html("I'm sorry, there's been an error. Please try again")
}

function showCommits(el) {
  var url ="https://api.github.com/repos/"+ el.dataset.owner + "/"+ el.dataset.repository + "/commits"
  console.log(url)
  $.get(url, function(data) {
    var list = `<ul>${data.map(item => '<li>' + item.commit.author.name + '<br>' + item.sha + '<img src="' + item.committer.avatar_url + '" width="32" height= "25"></li>').join('')}</ul>`
    $("#details").html(list)
  });
}
