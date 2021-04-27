let madLibs = () => {
  let readline = require('readline-sync');

  const noun = readline.question('Enter a noun: ');
  const verb = readline.question('Enter a verb: ');
  const adjective = readline.question('Enter an adjective: ');
  const adverb = readline.question('Enter an adverb: ');

  let story = `Yesterday, I saw a ${adverb} ${adjective} ${noun}.
  I watched it ${verb} and then it dissapeared.`;

  console.log(story);
};

madLibs();