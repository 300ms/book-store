import Store from './store.js';

export default class UI {
  static addBook(book) {
    const table = document.querySelector('#book-list');
    const row = document.createElement('tr');
    const {
      author, title, pages, read,
    } = book;

    row.innerHTML = `
      <td>${author}</td>
      <td>${title}</td>
      <td>${pages}</td>
      <td><button class ="btn btn-info read">${read}</button></td>
      <td><button class ="btn btn-danger delete">X</button></td>
    `;

    table.appendChild(row);
  }

  static displayBooks() {
    const myBookStore = Store.getBooksFromLocal();

    myBookStore.forEach((book) => {
      UI.addBook(book);
    });
  }

  static showMsg(msg, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));

    const header = document.querySelector('.container');
    const content = document.querySelector('.content');

    header.insertBefore(div, content);

    setTimeout(() => document.querySelector('.alert').remove(), 1000);
  }

  static formReset() {
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').value = '';
  }

  static removeBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static toggleClasses() {
    document.getElementById('book-form').classList.toggle('d-none');
    document.getElementById('hidden').classList.toggle('d-none');
  }
}
