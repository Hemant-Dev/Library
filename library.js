// export function Book(title, author, noOfPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.noOfPages = noOfPages;
//     this.isRead = isRead;
// }

// export function addBookToLibrary(bookObj, myLibrary) {
//     myLibrary.push(bookObj);
// }


export class BookClass {
    title;
    author;
    noOfPages;
    isRead;

    constructor(title, author, noOfPages, isRead) {
        this.title = title;
        this.author = author;
        this.noOfPages = noOfPages;
        this.isRead = isRead;
    };

    addBookToLibrary(bookObj, myLibrary) {
        myLibrary.push(bookObj);
    };
}