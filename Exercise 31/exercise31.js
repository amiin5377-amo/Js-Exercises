async function fetchUserData() {
    try {
        const user = await fetch('https://jsonplaceholder.typicode.com/users'); 
    if (!user.ok) {
        throw new Error('Network response was not ok');
    }    
    const userData = await user.json();
    console.log("Fetched user data:", userData);
        
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
fetchUserData();