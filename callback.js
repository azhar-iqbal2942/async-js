console.log("Before");
// get User
getUser(1, displayUser);
console.log("After");

// Sync Functions
function displayUserRepoCommits(commits) {
  console.log(commits);
}

function displayUserRepo(repositories) {
  getRepoCommits(repositories[0], displayUserRepoCommits);
}

function displayUser(user) {
  getUserRepositories(user.name, displayUserRepo);
}

// Async Functions
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Waiting for database result");
    callback({ id: id, name: "Azhar" });
  }, 2000);
}

function getUserRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Getting Repos for user ${username}`);
    // callback(["repo1", "repo2", "repo3"]);
    callback(new Error("New Error from getUserRepositories "));
  }, 2000);
}

function getRepoCommits(repo_id, callback) {
  setTimeout(() => {
    console.log(`Getting Commits for user ${repo_id}`);
    callback({
      commits: [
        {
          name: "Azhar",
          time: "10:20:22",
        },
      ],
    });
  }, 2000);
}
