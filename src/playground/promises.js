const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: "Dave",
    //   age: 30,
    // });
    reject("Something went wrong");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

console.log("after");
