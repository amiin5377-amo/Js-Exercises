let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
colors.push("brown");
console.log(colors); // Output: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"]
colors.pop();
console.log(colors); // Output: ["red", "blue", "green", "yellow", "orange", "purple", "pink"]  
colors.shift();
console.log(colors); // Output: ["blue", "green", "yellow", "orange", "purple", "pink"]     

colors.unshift("black");
console.log(colors); // Output: ["black", "blue", "green", "yellow", "orange", "purple", "pink"]        
