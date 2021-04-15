let title = "Flintstone Family Members";
const ROW_SPACING = 40;

let spacing = Math.floor((ROW_SPACING - title.length) / 2);

console.log(title.padStart(spacing + title.length));
