document.addEventListener("DOMContentLoaded",function(){
    const addButton=document.querySelector("#book-adding");
    
         //making a library array
    const myLibrary=[];
     
    function Book(title,author,publ,genre){
        this.title=title,
        this.author=author,
        this.publ=publ,
        this.genre=genre
    };
    function addBookToLibrary(title, author, publ, genre) {
        let b1 = new Book(title, author, publ, genre); // Corrected object declaration
        myLibrary.push(b1); // Add book to the array
    }
    

    //adding book button
    addButton.addEventListener("click",()=>{
        let formContainer=document.querySelector(".form-container");
        if(formContainer.style.display==="none" || formContainer.style.display===""){
            formContainer.style.display="block";
        }
        else{
            formContainer.style.display="none";
        }

    })
    
    
   
    //already added books
    addBookToLibrary("The Alchemist", "Paulo Coelho", 1988, "Fiction");
    addBookToLibrary("Atomic Habits", "James Clear", 2018, "Self-help");
    addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic");
    addBookToLibrary("1984", "George Orwell", 1949, "Dystopian");
    addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 2011, "History");
    addBookToLibrary("Harry Potter and the Sorcerer’s Stone", "J.K. Rowling", 1997, "Fantasy");
    addBookToLibrary("The Psychology of Money", "Morgan Housel", 2020, "Finance");
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
    addBookToLibrary("The Silent Patient", "Alex Michaelides", 2019, "Thriller");
    addBookToLibrary("Deep Work", "Cal Newport", 2016, "Productivity");
    
    function updateTable(){
        const tableBody=document.querySelector("tbody");
        tableBody.innerHTML="";
    
        myLibrary.forEach((book)=>{
            const row=document.createElement("tr");
            row.innerHTML = 
                `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.publ}</td>
                <td>${book.genre}</td>`
            ;
            tableBody.appendChild(row);
        });
    }

    const displayBtn=document.getElementById("list");
    displayBtn.addEventListener("click",(event)=>{
        event.preventDefault();

        updateTable();

        const table=document.querySelector("#bookTable");
        if(table.style.display==="none" || table.style.display===""){
            table.style.display="block";
        }
        else{
            table.style.display="none";
        }
    });
    
    
    const submit = document.getElementById("submitbutton");
    
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const publ = document.getElementById("publication").value;
        const genre = document.getElementById("genre").value;

        
        addBookToLibrary(title, author, publ, genre);
    

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("publication").value = "";
        document.getElementById("genre").value = "";

        document.querySelector(".form-container").style.display = "none";
    });

const bookinfo=document.querySelector(".bookinfo");

const searchBtn=document.querySelector("#searchButton")
function displayDetails(book){
document.getElementById("btitle").innerText=`${book.title}`;
document.getElementById("bauthor").innerText=`${book.author}`;
document.getElementById("bpublication").innerText=`${book.publ}`;
document.getElementById("bgenre").innerText=`${book.genre}`;
bookinfo.style.display="block";
}
function searchBook(author, title) {
    let found = false;

    myLibrary.forEach((book) => {
        if (book.author.toLowerCase() === author.toLowerCase() && book.title.toLowerCase() === title.toLowerCase()) {
            displayDetails(book);
            found = true;
            return;
        }
    });

    const searchItem = document.querySelector(".search-box");
    let message = document.getElementById("not-found-message");

    if (!found) {
        if (!message) { // Create message only if it doesn't exist
            message = document.createElement("p");
            message.id = "not-found-message";
            message.innerText = "Book not found!";
            searchItem.appendChild(message);
        } 
    } else {
        if (message) {
            message.remove(); // Remove message if book is found
        }
    }

    // Timer to clear input fields and message
    setTimeout(() => {
        document.getElementById("sauthor").value = "";
        document.getElementById("stitle").value = "";
        if (message) message.remove(); // Remove message after timeout
        bookinfo.style.display = "none";
    }, 2000);
}

searchBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let author=document.getElementById("sauthor").value;
    let title=document.getElementById("stitle").value;
   
    searchBook(author,title);
})







});
    