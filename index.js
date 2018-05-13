$(document).ready(function (){
});

function searchRepositories(){
  var JSONObj = function(obj) { $.extend(this, JSON.parse(obj)); }
  $.ajax({
    url: `https://api.github.com/search/repositories?q=${$("#searchTerms").val()}`,
    type: 'GET',
    success: function(data){
        displayResults(data)
      },
    error: function(xhr, status, error){
      console.log("This is xhhr: " + xhr + "<br> Status: " + status +
      "<br> Error code: " + error )
      displayError()
    }
    })
  /*
  $.get(`https://api.github.com/search/repositories?q=${$("#searchTerms").val()}`,function(data){
      displayResults(data)
    })
    */
}

function displayResults(data){
  $("#results").html(

     `<ol>${data.items.map(
       r => '<li>' + r.name + '<br>' + r.description +
       '<br> <a href="' + r.html_url+ '">Links to Github</a>' +
       '<br> Owner: ' + r.owner.login +
       '<img src="' + r.owner.avatar_url + '"> <br>' +
       'Profile page: <a href="' + r.owner.html_url + '"> Owner\'s page </a> <br>' +
       '<a href="#" data-repo="' + r.name  + '"onclick="showCommits(`https://api.github.com/repos/' + r.owner.login +
        '/' + r.name + '/commits`)"> Show Commits </a> </li>')}
      </ol>`

  )
}

function showCommits(repo){
  /*
  $.get(repo, function(data){
     $("#details").html(
       `
         <ul>${data.map(
         r => '<li> SHA key: ' + r.sha +
         '<br> Author: ' + r.commit.author.name +
         '<br> Authors login: ' + r.author.login +
         '<img src="' + r.author.avatar_url +
         '"></li>')}
        </ul>
       `
     )
   })
  */

  $.ajax({
    url: repo,
    type: 'GET',
    success: function(data){
       $("#details").html(
         `
           <ul>${data.map(
           r => '<li> SHA key: ' + r.sha +
           '<br> Author: ' + r.commit.author.name +
           '<br> Authors login: ' + r.author.login +
           '<img src="' + r.author.avatar_url +
           '"></li>')}
          </ul>
         `
       )
     },
     error: function(xhr, status, error){
       console.log("This is xhr: " + xhr + "<br> Status: " + status +
       "<br> Error code: " + error )
       displayError()
     }
  })

}


function displayError(){
  $("#errors").html(
    "<strong> I'm sorry, there's been an error. Please try again </strong>"
  )
}
