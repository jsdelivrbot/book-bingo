/**
* A Challenge is the framework for an empty bingo card. Each card references
* either a prebuilt or custom challenge, which allows for challenges to be
* easily reused.
*/

const challengeStructure = {
  "id" : { // custom challenges will use a numeric id; prebuilt ones will use strings.
    "title": "title", // string; title of the challenge.
    "info": "http://info.url", // url; used to link to r/Fantasy challenge info thread.
    "recommendations": "http://recs.url", // url; used to link to r/Fantasy challenge recommendations thread.
    "squares": [] // array; contains 25 strings, each of which is the title of a challenge square.
  },
}

const exampleChallenge = {
  "rf2015": {
    "title": "r/Fantasy 2015",
    "info": "https://www.reddit.com/r/Fantasy/comments/31ki25/rfantasy_2015_book_bingo_challenge/",
    "recommendations": "https://www.reddit.com/r/Fantasy/comments/3bnawy/the_what_should_i_read_for_this_bingo_square_post/",
    "squares": [
      "Literary fantasy or non-fantasy",
      "Stand-alone fantasy novel",
      "Historical fantasy",
      "Novel by an author on r/Fantasy's women in fantasy list",
      "An author's debut novel",

      "Novel by an r/Fantasy AMA author",
      "Novel originally written in a language other than English",
      "A novel over 500 pages",
      "Pre-Tolkien fantasy",
      "A novel from r/Fantasy's official underrated and under-read list",

      "Fairytale retelling",
      "Portal fantasy",
      "Free space",
      "Novel adapted to the screen (Movie or TV)",
      "Published before the year 2000",

      "Self-published novel",
      "2015 r/Fantasy best of lists: novel or author",
      "Comic fantasy",
      "A novel you first heart of from an r/Fantasy member",
      "Arthurian fantasy",

      "Award-winning novel (Hugo, Nebula, or World Fantasy)",
      "Novel published in 2015",
      "Five fantasy short stories",
      "Any r/Fantasy Goodreads group book of the month",
      "Urban fantasy",
    ]
  }
};
