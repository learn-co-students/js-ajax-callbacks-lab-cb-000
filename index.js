$(function() {
	$('#searchRepos').click(function() {
		searchRepositories()
	})

	function searchRepositories() {
		var searchTerms = $('#searchTerms').val()
		var url = `https://api.github.com/search/repositories?q=${searchTerms}`

		// AJAX
		$.get(url)
	  .done(function(data) {
		  displayRepositories(data)
	  });
	}

	function displayRepositories(data) {
		var repositoryTemplate = $('#repository-template').html()
	  var template = Handlebars.compile(repositoryTemplate)
	  $('#results').html(template(data))
	  $('#details').empty()
	  $('.commit-link').click(function() {
			showCommits(this)
		})
	}

	function showCommits(e) {
		// GET /repos/:owner/:repo/commits
		var repo = e.dataset.repo
		var owner = e.dataset.owner
		var url = `https://api.github.com/reos/${owner}/${repo}/commits`

		// AJAX
		$.get(url)
	  .done(function(data) {
		  var commitTemplate = $('#commit-template').html()
			var template = Handlebars.compile(commitTemplate)
			$('#details').html(template(data))
	  })
	  .fail(function(error) {
	  	displayError(error)
		});
	}

	function displayError(error) {
		var errorTemplate = $('#error-template').html()
		var template = Handlebars.compile(errorTemplate)
		$('#errors').html(template(error))
	}

});