const cardContainer = document.querySelector("#cardContainer");
const myLibrary = [];
const newBook = document.querySelector("#newBook");
const addBookClose = document.querySelector(".addBookClose");
function Book (title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        if (haveRead === "true") {
            displayRead = "Read";
        } else {
            displayRead = "Unread";
        }
        return title + " by " + author + "," + pages + " Pages, " + displayRead;
    };
}
let i = 0;
function AddBookToLibrary(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const pageNo = document.getElementById("pageNo").value;
    const haveRead = document.querySelector('input[name = "haveRead"]:checked').value;
    const newBook = new Book(bookName, authorName, pageNo, haveRead);
    myLibrary.push(newBook);
    DisplayBooks(i);
    i++;
}

function DisplayBooks(i){
    while (i < myLibrary.length){
        console.log(myLibrary[i]);
        const card = document.createElement("div"); 
        card.textContent = myLibrary[i].info();
        cardContainer.appendChild(card);
        i++;
    }
}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    AddBookToLibrary();
});

const modal = document.querySelector("[addBook]");
newBook.addEventListener("click", () => {
    modal.showModal();
});

addBookClose.addEventListener("click", () => {
    modal.close();
});


DisplayBooks();