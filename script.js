import { Book, addBookToLibrary } from "./library.js";
const myLibrary = [];  // Book Arr
const bookContainer = document.querySelector('.book-container');
const addBookCard = document.querySelector('.add-card');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('dialog button');
const showBtn = document.querySelector('.add-card-btn');
const submitBtn = document.querySelector('#submit-btn');
// Test Data
let book = new Book("Demo", "Auth", 200, true);
let b1 = new Book("B1", "Auth1", 100, false);
let b2 = new Book("B2", "Auth2", 200, true);
let b3 = new Book("B3", "Auth3", 400, false);
//Seeding the data
addBookToLibrary(b1, myLibrary);
addBookToLibrary(b2, myLibrary);
addBookToLibrary(book, myLibrary);
addBookToLibrary(b3, myLibrary);
addBookToLibrary(b3, myLibrary);

//Initializing the library
showLibrary(myLibrary);

// Functions to create the book card
function createCard(bookObj) {
    const card = document.createElement('div');
    addCardElements(card, bookObj);
    card.classList = "card";
    bookContainer.insertBefore(card, addBookCard);
}

// Function to show the already created library
function showLibrary(myLibrary) {
    myLibrary.forEach((object) => {
        createCard(object);
    });
}

//Function to show the book porperties in the card
function addCardElements(card, bookObj) {
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

// Modal
showBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());


//Getting Form Inputs
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#book-title');
    const author = document.querySelector('#book-author');
    const pages = document.querySelector('#pages');
    const status = document.querySelector('input[name="isRead"]:checked');
    if(title.value === '' || author.value === ''){
        alert(`Enter Required Values!`);
    }else{
        const bookObj = new Book(title.value, author.value, pages.value, status.value);
        // console.log(bookObj);
        addBookToLibrary(bookObj, myLibrary);
        createCard(bookObj);
        console.log(myLibrary);
        dialog.close();
    }
});