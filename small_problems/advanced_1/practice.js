function duplicateCount(text){
  let letterObj = {};
  
  for (let i in text) {
    if (letterObj[text[i].toLowerCase()]) {
      letterObj[text[i].toLowerCase()] += 1;
    } else {
      letterObj[text[i]] = 1;
    }
  }
  return Object.values(letterObj).filter(obj => obj > 1).length
}