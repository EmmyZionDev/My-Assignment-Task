
  let MyBook = JSON.parse(localStorage.getItem("AllBooks")) || [];

  const bookName = document.getElementById("bookName");
  const authorName = document.getElementById("authorName");
  const showB = document.getElementById("ShowB");

  const AddBook =() => {
    let book = {
      bookname: bookName.value,
      authorname: authorName.value,
      Dates: new Date().toLocaleDateString()
    };

    MyBook.push(book);
    localStorage.setItem("AllBooks", JSON.stringify(MyBook));
    alert ("Book Added Succesful")
    window.location.reload();
  }

  MyBook.forEach((book, i) => {
   const data = `
      <li>
        <div class="section">
          <div>
            <h3>${book.bookname}</h3>
            <p>${book.authorname}</p>
            <hr>
            <span class="span">${book.Dates}</span>
          </div>
          <div>
            <button onclick="deleteBook(${i})">Delete</button>
          </div>
        </div>
      </li>
    `; 
    return showB.innerHTML += data
  });

    const deleteBook = (i) => {
    MyBook.splice(i, 1);
    localStorage.setItem("AllBooks", JSON.stringify(MyBook));
    window.location.reload();
  }
       
 
