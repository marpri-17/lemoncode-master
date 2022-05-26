console.log("************** DELIVERABLE 04 *********************");

interface book {
    title: string,
    isRead: boolean
}

function isBookRead(books: book[], titleToSearch: string) {
    const foundedBook:book = books.find(book => book.title.toLowerCase().includes(titleToSearch.toLowerCase()));
    return  foundedBook ? foundedBook.isRead : false;
  }


  const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false