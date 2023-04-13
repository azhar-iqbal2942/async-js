async function getCommits() {
  try {
    const user = await getUser(1);
    const repos = await getUserRepositories(user.name);
    const commits = await getRepoCommits(repos[0]);
    console.dir(commits, (depth = 0));
  } catch (err) {
    console.log("error ", err.message);
  }
}
getCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Waiting for database result");
      resolve({ id: id, name: "Azhar" });
    }, 1000);
  });
}

function getUserRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting Repos for user ${username}`);
      reject(new Error("Error from getUserRepositories"));
      //   resolve(["repo1", "repo2", "repo3"]);
    }, 1000);
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
    }, 1000);
  });
}
