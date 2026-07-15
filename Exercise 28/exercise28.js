function FetchData() {
    return new Promise((resolve, reject) => {
setTimeout(() => {
    const sucess = true; 
    if (sucess) {
        resolve("Data fetched successfully");
    } else {
        reject("Failed to fetch data");
    }
}, 2000);
}); }

async function FetchDataAsync() {
    try {
        const data = await FetchData();
        console.log("Fetched data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

FetchDataAsync();