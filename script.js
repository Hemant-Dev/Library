import { Book, addBookToLibrary } from "./library.js";
const myLibrary = [];  // Book Arr
const bookContainer = document.querySelector('.book-container');
const addBookCard = document.querySelector('.add-card');


// Test Data
let book = new Book("Demo", "Auth", 200, true);
let b1 = new Book("B1", "Auth1", 100, false);
let b2 = new Book("B2", "Auth2", 200, true);

//Seeding the data
addBookToLibrary(b1, myLibrary);
addBookToLibrary(b2, myLibrary);
addBookToLibrary(book, myLibrary);


//Initializing the library
showLibrary(myLibrary);



// Functions to create the book card
function createCard(bookObj){
    const card = document.createElement('div');
    addCardElements(card, bookObj);
    card.classList = "card";
    bookContainer.insertBefore(card, addBookCard);
}

// Function to show the already created library
function showLibrary(myLibrary){
    myLibrary.forEach((object) => {
        createCard(object);
    });
}

function addCardElements(card, bookObj){
    const title = document.createElement('h3');
    title.classList = "book-title";
    const author = document.createElement('h4');
    author.classList = "book-author";
    const pages = document.createElement('h4');
    pages.classList.add('page-no');
    const status = document.createElement('h4');
    status.classList.add('status');
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');

    title.textContent = bookObj.title;
    author.textContent = bookObj.author;
    pages.textContent = "Pages: " + bookObj.noOfPages;
    status.textContent = "Read: " + bookObj.isRead;
    delBtn.textContent = "X";

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(delBtn);
}