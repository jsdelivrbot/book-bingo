/**
* A Book Restriction maps the squares for a specific challenge which an
* individual book can or cannot be placed into. These are an optional extra,
* and alongside the strictMode option allow users who enter a large number of
* books to gain fine-grained control over which books are available for which
* card, and which squares within those cards.
*/

const bookRestrictionStructure = {
  "book": "id", // numeric string; the book's unique id.
  "challenge": "id", // string; the challenge's unique id.
  "squares": [] // array of 25 bools; true means the book can be used for that square, false means it cannot.
}

const exampleBookRestriction = {
  "book": "1",
  "challenge": "rf2016",
  "squares": [
    true,
    false,
    false,
    true,
    true,

    false,
    true,
    false,
    true,
    true,

    true,
    false,
    true,
    true,
    false,

    false,
    true,
    true,
    true,
    false,

    true,
    false,
    false,
    false,
    false
  ]
}
