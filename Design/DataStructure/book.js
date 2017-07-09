/**
* A Book is fairly self-explanatory! Depending on how easy the APIs are to
* work with, it should be possible to search for books via both OpenLibrary
* and GoodReads, as well as being able to manually enter the details. At this
* point, OpenLibrary's API looks the most promising, so the app might end up
* using that much more extensively than others.
*/

const bookStructure = {
  "id": { // numeric string; the book's unique id.
    "title": "Title", // string; the book's title.
    "author": "Author", // string; the book's title.
    "series": "Series", // string; the book's series.
    "number": 0, // null/int; the book's number within its series.
    "date": "date", // string; the book's published date.
    "goodreads": null, // null/int; the book's GoodReads ID.
    "isbn": "isbn" // string; the book's ISBN.
  }
}

const exampleBook = {
  "1": {
    "title": "Assassin's Apprentice",
    "author": "Robin Hobb",
    "series": "Farseer Trilogy",
    "number": 1,
    "date": "1995-05-01",
    "goodreads": 21956219,
    "isbn": "9780553573398"
  }
}
