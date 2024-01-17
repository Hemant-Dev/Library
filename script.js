const myLibrary = [];

function Book(title, author, noOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

b1 = new Book("Demo", "Auth1", 100, false);
b2 = new Book("Demo2", "Auth2", 200, true);

addBookToLibrary(b1);
addBookToLibrary(b2);

console.log(myLibrary);