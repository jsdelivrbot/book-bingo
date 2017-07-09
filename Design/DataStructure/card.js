/**
* A Card is an individual instance of a bingo challenge. Separating the cards
* from the challenges this way allows users to complete any given challenge as
* many times as they want.
*/

const cardStructure = {
  "id": { // numeric string; the card's unique id.
    "template": "id", // string; reference to the card's challenge id.
    "title": "title", // string; the card's title.
    "description": "description", // string; the card's descriptiong.
    "complete": false, // bool; marks whether the card is complete or in progress.
    "strictMode": false, // bool; marks whether the user can add any card to any square, or only add cards which have been assigned as "available" for that square.
    "squares": [] // array; contains 25 strings, each of which is either null (for empty) or a string referencing the id of a book which has been read for that square.
  }
}

const exampleCard = {
  "1": {
    "template": "rf2016",
    "title": "My First Bingo Card",
    "description": "First time I've ever tried taking part!",
    "complete": false,
    "strictMode": true,
    "squares": [
      "1",
      null,
      "3",
      "4",
      "5",

      null,
      "7",
      "8",
      "9",
      null,

      "11",
      "12",
      null,
      null,
      null,

      null,
      "17",
      "18",
      "19",
      "20",

      "21",
      null,
      null,
      "24",
      "25"
    ]
  }
}
