import { Book, addBookToLibrary } from "./library.js";
const myLibrary = [];  // Book Arr
const bookContainer = document.querySelector('.book-container');
const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('dialog button');
const showBtn = document.querySelector('.add-card-btn');
const submitBtn = document.querySelector('#submit-btn');

// Test Data
// let book = new Book("Demo", "Auth", 200, true);
// let b1 = new Book("B1", "Auth1", 100, false);
// let b2 = new Book("B2", "Auth2", 200, true);
// let b3 = new Book("B3", "Auth3", 400, false);
//Seeding the data
// addBookToLibrary(b1, myLibrary);
// addBookToLibrary(b2, myLibrary);
// addBookToLibrary(book, myLibrary);
// addBookToLibrary(b3, myLibrary);
// addBookToLibrary(b3, myLibrary);

//Initializing the library
// showLibrary(myLibrary);

// Functions to create the book card
function createCard(bookObj) {

    const card = document.createElement('div');
    addCardElements(card, bookObj);
    //Updating Total Cards Count
    card.classList = "card";
    // cardsCount++;
    // card.setAttribute("data-card-index", cardsCount);
    // bookContainer.insertBefore(card, addBookCard);
    bookContainer.appendChild(card);

}

// Function to show the already created library
function updateBooksGrid(){
    resetBookGrid();
    for(let book of myLibrary){
        createCard(book);
    }
}

function removeBook(e){
    const title = e.target.parentNode.children[0].firstChild.data;
    // console.log(title);
    const book = getBookFromLibrary(title);
    const index = myLibrary.indexOf(book);
    removeBookFromLibrary(index);
    updateBooksGrid();
}

function changeStatus(e){
    const title = e.target.parentNode.children[0].firstChild.data;
    // console.log(getBook(cardIndex).isRead);
    const book = getBookFromLibrary(title);
    book.isRead = !book.isRead;
    updateBooksGrid();
}
function removeBookFromLibrary(index){
    myLibrary.splice(index, 1);
}
function getBookFromLibrary(title){
    return myLibrary.find((book) => book.title === title);
}
function isInLibrary(newBook){
    return myLibrary.find((book) => book.title === newBook.title);
}
// Reset Grid
function resetBookGrid(){
    bookContainer.innerHTML = '';
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
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('delete-btn', 'status-btn');
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');

    delBtn.onclick = removeBook;
    statusBtn.onclick = changeStatus;

    title.textContent = bookObj.title;
    author.textContent = bookObj.author;
    pages.textContent = "Pages: " + bookObj.noOfPages;
    status.textContent = "Read: " + bookObj.isRead;
    statusBtn.textContent = "Change";
    delBtn.textContent = "Delete";

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(statusBtn);
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
        // createCard(bookObj);
        updateBooksGrid();
        console.log(myLibrary); 
        dialog.close();
    }
});
