$(document).ready(function (){
  // Without the 'click' function, the search executes prior
  $('#searchRepos').click( function() {
    searchRepositories();
  });
});

function searchRepositories() {
  var searchTerms = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`;
  $.get(url).done( function(data) {
    // Success function
    showRepositories(data);
  }).fail( function(error) {
    displayError(error);
  });

  done();
}

function showRepositories( data ) {
  //$('#results').html("<div><p>Hello World!</p></div>");
  // Display the collection of repositories inside the results div.
  // Include repository name, description, and a link to the HTML URL.
  // Also include repository owner login, repository owner avatar as
  // an image, and a link to the owner's profile page.

  //console.log(data)
  //console.log(data.items[0]);

   var searchResults = "<div>" + data.items.map( item => {
       return (`
         <div>
            <h2><a href="${item.html_url}">${item.name}</a></h2>
            <p>Description: ${item.description}</p>
            <p>Owner: <a href="${item.owner.html_url}">${item.owner.login}</a></p>
            <img src="${item.owner.avatar_url}" height="32" width="32">
            <p><a href="#" data-owner="${item.owner.login}" data-repo="${item.name}" onclick="showCommits(this)">Show Commits</a></p>
         </div>`
        )
     }).join('') + "</div>";

  //searchResults += `<a href="${data.url}">${data.name}</a>`;
  //searchResults += `${data.items[0].name}`;
  //console.log( searchResults );
  //console.log( this );

  $("#results").html( searchResults );
}

function showCommits(e) {
  //$.get( url, function(data) {
  //  showRepositories(data);
  //}).fail( function(error) {
  //  displayError(error);
  //});

  var owner = e.dataset.owner;
  var repo = e.dataset.repo;

  var url = `https://api.github.com/repos/${owner}/${repo}/commits`;
  console.log( url );
  $.get(url).done( data => {
    //console.log( data );
    displayCommits(data);
  }).fail( function(error) {
    displayError(error);
  });

  done();
}

function displayCommits( data ) {
  //For each commit, list the SHA, the author, the author's login,
  // and the author's avatar as an image.
  console.log( data );

  var searchResults = "<div>" + data.map( item => {
      return (`
        <div>
           <h3>SHA: ${item.sha}</h3>
           <p>Author Name: ${item.commit.author.name}</p>
           <p>Author Login: ${item.author.login}</p>
           <img src="${item.author.avatar_url}" height="32" width="32">
           <br><br>
        </div>`
       )
    }).join('') + "</div>";

  $("#details").html( searchResults );
}

function displayError(error) {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}
