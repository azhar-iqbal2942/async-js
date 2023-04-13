const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Calling Facebook api");
    reject(new Error("Error comming from facebook"));
    // resolve("Facebook");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Calling Twitter api");
    resolve("Twitter");
  }, 1000);
});

Promise.all([p1, p2])
  .then((results) => console.log(results))
  .catch((err) => console.log("error ", err.message));
