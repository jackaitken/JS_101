// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

let addFamilyMember = (arr, name) => arr.push(name);

addFamilyMember(flintstones, 'Dino');

console.log(flintstones);