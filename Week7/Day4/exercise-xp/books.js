const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://images.gr-assets.com/books/1490528560l/4671.jpg",
        alreadyRead: true
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://images.gr-assets.com/books/1348990566l/5470.jpg",
      alreadyRead: false
    }
  ];
  
  console.log(allBooks);

  const getSection = document.querySelector('section');

  for (let book of allBooks) {
    const createDiv = document.createElement('div');
    getSection.appendChild(createDiv);
  
    const titleElement = document.createElement('h1');
    titleElement.textContent = book.title;
    createDiv.appendChild(titleElement);
  
    const authorElement = document.createElement('h2');
    authorElement.textContent = book.author;
    createDiv.appendChild(authorElement);
  
    const imageElement = document.createElement('img');
    imageElement.src = book.image;
    imageElement.style.width = '100px';
    createDiv.appendChild(imageElement);
  
    if (book.alreadyRead) {
      createDiv.style.color = 'red';
    }
  }
  
// const getSection = document.querySelector("section");

// allBooks.forEach((book) => {
//   const getDiv = document.createElement("div");
//   getDiv.innerHTML = `
//     <h3>${book.title}</h3>
//     <p>Written by ${book.author}</p>
//     <img src="${book.image}" width="100px" />
//   `;

//   if (book.alreadyRead) {
//     getDiv.style.color = "red";
//   }

//   getSection.appendChild(getDiv);
// });
