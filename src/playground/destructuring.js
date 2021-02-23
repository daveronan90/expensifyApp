// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

const address = ["13 Robert St", "New Ross", "Wexford", "Y34X373"];

const [, city, state = "New York"] = address;

console.log(`You're in ${city}, ${state}.`);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , costMed] = item;

console.log(`A medium ${itemName} cost ${costMed}`);
