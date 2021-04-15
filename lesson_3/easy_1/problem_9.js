// In the previous problem, our first answer added 'Dino' to 
// the array like this:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

let addFamilyMembers = (arr, name1, name2) => arr.push(name1, name2);

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
addFamilyMembers(flintstones, 'Dino', 'Hoppy');

console.log(flintstones);