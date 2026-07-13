//



function Asynchronous( callback) {
    setTimeout(() => {
        const result = { message: "Asynchronous operation complete!" };
        callback(result);
    }, 2000);
}
console.log("Starting asynchronous operation...");
Asynchronous((result) => {
    console.log(result);
    console.log("Asynchronous operation finished.");
});