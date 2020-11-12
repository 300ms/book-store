export default class Store {
  static getBooksFromLocal() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }

  static addBookToLocal(book) {
    const books = Store.getBooksFromLocal();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static findBook(title, author, pages) {
    const books = Store.getBooksFromLocal();
    let i = -1;

    books.forEach((b, index) => {
      if (b.title === title && b.author === author && b.pages === pages) {
        i = index;
      }
    });

    return i;
  }

  static removeBookFromLocal(title) {
    const books = Store.getBooksFromLocal();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
