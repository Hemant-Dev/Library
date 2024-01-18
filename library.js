export function Book(title, author, noOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

export function addBookToLibrary(bookObj, myLibrary) {
    myLibrary.push(bookObj);
}
