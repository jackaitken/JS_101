// One day, Spot was playing with the Munster family's home
// computer, and he wrote a small program to mess with their
// demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);

/*
I'm split on this but my gut feeling is that he family's data did
not get ransacked. Spot is changing data but he's changing data on
the array that is returned from Object.values(demoObject). The changes
in this array shouldn't affect the munster object values.

Okay so I was wrong...

Because objects are passed by reference, Object.values(demoObject) is still
pointing to the original object. Therefore making changes on demoObject
means we're making changes on the original object. If we reassigned
Object.values to another variable, then we would be making changes to copies
of the data, but he didn't do that.
*/