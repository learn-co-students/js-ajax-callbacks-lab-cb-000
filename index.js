function searchRepositories() {
  query = $('#searchTerms').val();
  $.get('https://api.github.com/search/repositories?q=' + query, function(response) {
    const repos = JSON.parse(this.response);
    const src = $("#respository-template").html();
    const template = Handlebars.compile(src);
    const repoList = template(repos);
    $("#results").html(repoList);
  });
}

$(document).ready(function (){



});
