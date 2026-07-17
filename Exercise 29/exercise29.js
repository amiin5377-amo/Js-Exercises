async function fetchUserData() {
const user = await fetch('https://jsonplaceholder.typicode.com/users/1');
const userData = await user.json();
console.log("Fetched user data:", userData);
}

fetchUserData();



