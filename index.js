$(document).ready(function (){
  document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var term = document.getElementById('searchTerms').value ;
    console.log(term) ;
    var base = `https://api.github.com/search/repositories?q=${term}` ;
    $.get(base, function(data){
      var mapData = data.items.map(function(item){
        return htmlify(item)
      })
      document.getElementById('results').innerHTML += mapData ;
    //  alert("repos loaded")
  }).fail(function(){
    document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again."
  })
  })
});

function htmlify(item){
  var commits = item.commits_url.replace("{/sha}", "")
  var show = `<span onclick="showCommits('${commits}')" > Show Commits </span>` ;
  var link = `<a href="${item.owner.html_url}" >Owner</a>` ;
  var img = `<img src="${item.owner.avatar_url}" />`
  var owner = `owner. login: ${item.owner.login}. ${link} ${img}`
  var thing = `<p>name: ${item.name} <br/> Description: ${item.description} <br/> <a href='${item.html_url}'> link </a> <br/> ${show} <br/> ${owner} </p>` ;
  return thing ;
}
function showCommits(url){
  $.get(url, function(data){
    var commits = data.map(function(commit){
      console.log(commit) ;
      return doCommits(commit) ;
    })
    document.getElementById("details").innerHTML += commits ;
  }).fail(function(){
    document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again."
  })
  console.log("showing commits") ;
  console.log(url);
}

function doCommits(commit){
  var sha = commit.sha ;
  var login ;
  var name ;
  var imglink ;
  if (!!commit.author){
    login = commit.author.login ;
    name = commit.author.name ;
    imglink = commit.author.avatar_url ;
  }
  var img = `<img src="${imglink}" />`
  var thing = `<p> sha: ${sha} . name: ${name} . login: ${login} . ${img} </p>` ;
  return thing ;
}
