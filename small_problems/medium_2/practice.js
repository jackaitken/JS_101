function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
      `I ${this.read ? "have" : "haven't"} read it.`;
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunt's aren't Gentleman", 'PG Wodhouse');

book1.readBook();
console.log(book3.getDescription());
console.log(book2.getDescription());
console.log(book1.getDescription());