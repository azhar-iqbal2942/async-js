getUser(1)
  .then((user) => getUserRepositories(user.name))
  .then((repos) => getRepoCommits(repos[0]))
  .then((commits) => console.dir(commits, (depth = 0)))
  .catch((err) => console.log("error ", err.message));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Waiting for database result");
      resolve({ id: id, name: "Azhar" });
    }, 2000);
  });
}

function getUserRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting Repos for user ${username}`);
      reject(new Error("Error comming from "))
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getRepoCommits(repo_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting Commits for user ${repo_id}`);
      resolve({
        commits: [
          {
            name: "Azhar",
            time: "10:20:22",
          },
        ],
      });
    }, 2000);
  });
}
