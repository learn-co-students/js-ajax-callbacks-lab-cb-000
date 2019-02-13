/* Query response:

total_count	444
incomplete_results	false
items	[…]
    0	{…}
        id	80750446
        node_id	MDEwOlJlcG9zaXRvcnk4MDc1MDQ0Ng==
        name	stockwatcher
        full_name	bignerdranch/stockwatcher
        private	false
        owner	{…}
            login	bignerdranch
            id	230455
            node_id	MDEyOk9yZ2FuaXphdGlvbjIzMDQ1NQ==
            avatar_url	https://avatars3.githubusercontent.com/u/230455?v=4
            gravatar_id	
            url	https://api.github.com/users/bignerdranch
            html_url	https://github.com/bignerdranch
            followers_url	https://api.github.com/users/bignerdranch/followers
            following_url	https://api.github.com/users/bignerdranch/following{/other_user}
            gists_url	https://api.github.com/users/bignerdranch/gists{/gist_id}
            starred_url	https://api.github.com/users/bignerdranch/starred{/owner}{/repo}
            subscriptions_url	https://api.github.com/users/bignerdranch/subscriptions
            organizations_url	https://api.github.com/users/bignerdranch/orgs
            repos_url	https://api.github.com/users/bignerdranch/repos
            events_url	https://api.github.com/users/bignerdranch/events{/privacy}
            received_events_url	https://api.github.com/users/bignerdranch/received_events
            type	Organization
            site_admin	false
        html_url	https://github.com/bignerdranch/stockwatcher
        description	stockwatcher, a modern android development stack showcase
        fork	false
        url	https://api.github.com/repos/bignerdranch/stockwatcher
        forks_url	https://api.github.com/repos/bignerdranch/stockwatcher/forks
        keys_url	https://api.github.com/repos/bignerdranch/stockwatcher/keys{/key_id}
        collaborators_url	https://api.github.com/repos/bignerdranch/stockwatcher/collaborators{/collaborator}
        teams_url	https://api.github.com/repos/bignerdranch/stockwatcher/teams
        hooks_url	https://api.github.com/repos/bignerdranch/stockwatcher/hooks
        issue_events_url	https://api.github.com/repos/bignerdranch/stockwatcher/issues/events{/number}
        events_url	https://api.github.com/repos/bignerdranch/stockwatcher/events
        assignees_url	https://api.github.com/repos/bignerdranch/stockwatcher/assignees{/user}
        branches_url	https://api.github.com/repos/bignerdranch/stockwatcher/branches{/branch}
        tags_url	https://api.github.com/repos/bignerdranch/stockwatcher/tags
        blobs_url	https://api.github.com/repos/bignerdranch/stockwatcher/git/blobs{/sha}
        git_tags_url	https://api.github.com/repos/bignerdranch/stockwatcher/git/tags{/sha}
        git_refs_url	https://api.github.com/repos/bignerdranch/stockwatcher/git/refs{/sha}
        trees_url	https://api.github.com/repos/bignerdranch/stockwatcher/git/trees{/sha}
        statuses_url	https://api.github.com/repos/bignerdranch/stockwatcher/statuses/{sha}
        languages_url	https://api.github.com/repos/bignerdranch/stockwatcher/languages
        stargazers_url	https://api.github.com/repos/bignerdranch/stockwatcher/stargazers
        contributors_url	https://api.github.com/repos/bignerdranch/stockwatcher/contributors
        subscribers_url	https://api.github.com/repos/bignerdranch/stockwatcher/subscribers
        subscription_url	https://api.github.com/repos/bignerdranch/stockwatcher/subscription
        commits_url	https://api.github.com/repos/bignerdranch/stockwatcher/commits{/sha}
        git_commits_url	https://api.github.com/repos/bignerdranch/stockwatcher/git/commits{/sha}
        comments_url	https://api.github.com/repos/bignerdranch/stockwatcher/comments{/number}
        issue_comment_url	https://api.github.com/repos/bignerdranch/stockwatcher/issues/comments{/number}
        contents_url	https://api.github.com/repos/bignerdranch/stockwatcher/contents/{+path}
        compare_url	https://api.github.com/repos/bignerdranch/stockwatcher/compare/{base}...{head}
        merges_url	https://api.github.com/repos/bignerdranch/stockwatcher/merges
        archive_url	https://api.github.com/repos/bignerdranch/stockwatcher/{archive_format}{/ref}
        downloads_url	https://api.github.com/repos/bignerdranch/stockwatcher/downloads
        issues_url	https://api.github.com/repos/bignerdranch/stockwatcher/issues{/number}
        pulls_url	https://api.github.com/repos/bignerdranch/stockwatcher/pulls{/number}
        milestones_url	https://api.github.com/repos/bignerdranch/stockwatcher/milestones{/number}
        notifications_url	https://api.github.com/repos/bignerdranch/stockwatcher/notifications{?since,all,participating}
        labels_url	https://api.github.com/repos/bignerdranch/stockwatcher/labels{/name}
        releases_url	https://api.github.com/repos/bignerdranch/stockwatcher/releases{/id}
        deployments_url	https://api.github.com/repos/bignerdranch/stockwatcher/deployments
        created_at	2017-02-02T17:36:08Z
        updated_at	2018-08-18T08:53:36Z
        pushed_at	2017-06-15T19:33:55Z
        git_url	git://github.com/bignerdranch/stockwatcher.git
        ssh_url	git@github.com:bignerdranch/stockwatcher.git
        clone_url	https://github.com/bignerdranch/stockwatcher.git
        svn_url	https://github.com/bignerdranch/stockwatcher
        homepage	
        size	171
        stargazers_count	63
        watchers_count	63
        language	Java
        has_issues	true
        has_projects	true
        has_downloads	true
        has_wiki	true
        has_pages	false
        forks_count	16
        mirror_url	null
        archived	false
        open_issues_count	2
        license	null
        forks	16
        open_issues	2
        watchers	63
        default_branch	stockwatcher-article-base
        score	91.37434
*/

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
            //this works:
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


function getUrl(query) {
   // alert("returning: " + "https://api.github.com/search/repositories?q=" + query);
    return "https://api.github.com/search/repositories?q=" + query;
}



function displayData(dataArr) {
    const src = document.getElementById("repos-template").innerHTML;
    const template = Handlebars.compile(src);
    const repoList = template(dataArr);
    document.getElementById("results").innerHTML=repoList;
}

function showCommits(el) {
    /*
    const repository = el.dataset.repository;
    const name = el.dataset.owner
    const req = new XMLHttpRequest();
    const url = 'https://api.github.com/repos/' + name + '/' + repository + '/commits';
    console.log ("URL:  " + url);
debugger;
    req.addEventListener("load", displayCommits);
    req.open("GET", url);
    
    req.send();
    */

    /*    */
    const repository = el.dataset.repository;
    const name = el.dataset.owner
    const apiQuery = 'https://api.github.com/repos/' + name + '/' + repository + '/commits';
    $.get(apiQuery, function (response) {
        console.log(this.responseText);
        const commits = JSON.parse(this.responseText);
        const displayCommitsList = `${commits.map(commit =>  'commit.commit.committer.name: ' + commit.commit.committer.name + '\ncommit.commit.author.name:  ' + commit.commit.author.name + '\ncommit.commit.message:  ' + commit.commit.message + "\n\n").join('')}`
        const commitsList = `<ul>${commits.map(commit =>  '<li><strong>' + commit.commit.committer.name + '</strong> - ' + commit.commit.author.name + '<br>' + commit.commit.message + '</li>').join('')}</ul>`;
        document.getElementById("details").innerHTML = commitsList;
    }).fail(function () {
        displayError()
    });
  }
/*
  function displayCommits() {
    console.log(this.responseText);
    const commits = JSON.parse(this.responseText);
    const displayCommitsList = `${commits.map(commit =>  'commit.commit.committer.name: ' + commit.commit.committer.name + '\ncommit.commit.author.name:  ' + commit.commit.author.name + '\ncommit.commit.message:  ' + commit.commit.message + "\n\n").join('')}`
    const commitsList = `<ul>${commits.map(commit =>  '<li><strong>' + commit.commit.committer.name + '</strong> - ' + commit.commit.author.name + '<br>' + commit.commit.message + '</li>').join('')}</ul>`;
    document.getElementById("details").innerHTML = commitsList;
  }
  */
  


function displayError(error) {
    document.getElementById("errors").innerHTML = "I'm sorry, there's been an error. Please try again.";
}

   //const displayList = `${repos.map(r => "r.Name: " + r.name + "\nr.owner.login
   //: " + r.owner.login + "\nr.html_url:  " + r.html_url + "\n\n").join('')}`
       
  // var test = `${repos.map(r => "r.Name: " + r.name + ",\n").join('')}`;  
   
  //const repoList = "<ul>" + repos.map(r => '<li>' + r.name + '<br><a href="#" 
  
  //data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="
  
  //getCommits(this)">Get Commits</a>' + '<br> <a href="' + r.html_url + '">See Repo
   //sitory</a></li>' + '<a href="#" data-repository="' + r.name + '" data-username="
   //' + r.owner.login + '" onclick="getBranches(this)">Get Branches</a><br><br>').jo
   //in('') + "</ul>";
      // document.getElementById("repositories").innerHTML = repoList;
   
