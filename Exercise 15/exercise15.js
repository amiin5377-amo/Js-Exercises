const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago"      }
];
console.log("each person in the array:");


for ( let key in people) {
    console.log("Name: " + people[key].name);
    console.log("Age: " + people[key].age);
    console.log("City: " + people[key].city);
}

