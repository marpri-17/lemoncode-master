console.log("************** DELIVERABLE 04 *********************");
console.log(
  "%cBOOKS -> show if book is reading searching by title",
  "color: blue; font-weight: bold"
);

interface BookModel {
  title: string;
  isRead: boolean;
}

/**
 * Check if book is read
 * @param books books collection
 * @param titleToSearch book title for search in collection
 * @returns {boolean} is bood marked as read.
 *  False is book does not exists at collection
 */
function isBookRead(books: BookModel[], titleToSearch: string): boolean {
  const foundedBook = books.find((book) =>
    book.title.toLowerCase().includes(titleToSearch.toLowerCase())
  );
  return foundedBook ? foundedBook.isRead : false;
}

const books: BookModel[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("is read 'Devastación'?: ", isBookRead(books, "Devastación")); // true
console.log(
  "is read 'Canción de hielo y fuego'?: ",
  isBookRead(books, "Canción de hielo y fuego")
); // false
console.log(
  "is read 'Los Pilares de la Tierra'?: ",
  isBookRead(books, "Los Pilares de la Tierra")
); // false
