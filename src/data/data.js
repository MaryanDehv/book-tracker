// placeholder content until database is set up

const bookData = {
        books: [
          {
            "title": "Echoes of Eternity",
            "image": "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
            "description": "Global chase uncovers key's power.",
            "genre": ["mystery", "psychology"],
            "progress": 100,
            "status": "completed",
            "rating": 3,
            "author": "Ava Barnes",
            "readingtime": [
              { "value": 3 }, { "value": 2 }, { "value": 1 }, { "value": 1 }, { "value": 1 }, { "value": 1 }, { "value": 1 }
            ],
            "logs": [
              {
                "date": { "day": "30", "month": "july" },
                "content": "In Chapter 15 of Echoes of Eternity, the narrative takes a cosmic turn as the characters journey to the fabled Celestial Nexus. Here, where the boundaries of time and space blur, they seek answers that could mend the shattered reality. As they navigate this ethereal realm, echoes of lives unlived and destinies unrealized reverberate, offering both solace and unsettling truths. Each step closer to the heart of the Nexus unravels threads of eternity, weaving a tapestry of existence itself."
              },
              {
                "date": { "day": "29", "month": "may" },
                "content": "In Chapter 7 of Echoes of Eternity, as the characters explore the ancient ruins, they stumble upon an enigmatic inscription. Its meaning remains elusive, but it promises to unveil the forgotten history of an otherworldly civilization. As they decipher its riddles, echoes of a distant past begin to resurface, hinting at a power that could reshape their world."
              },
              {
                "date": { "day": "14", "month": "june" },
                "content": "In Chapter 3 of Echoes of Eternity, the protagonists uncover a hidden passage beneath the city, leading them to a forgotten chamber filled with relics of a bygone era."
              },
              {
                "date": { "day": "22", "month": "july" },
                "content": "In Chapter 5 of Echoes of Eternity, a chance encounter with an enigmatic stranger sets the characters on a path to unlocking the secrets of an ancient prophecy."
              },
              {
                "date": { "day": "3", "month": "august" },
                "content": "In Chapter 8 of Echoes of Eternity, the characters face a moral dilemma as they unearth the consequences of an ancient pact that still reverberates through time."
              },
              {
                "date": { "day": "12", "month": "september" },
                "content": "In Chapter 11 of Echoes of Eternity, the protagonists confront their deepest fears in a surreal dreamscape, where reality and illusion intertwine."
              },
              {
                "date": { "day": "20", "month": "october" },
                "content": "In Chapter 14 of Echoes of Eternity, the characters decipher the final cryptic message, revealing the true nature of the key's power and the sacrifices required to wield it."
              }
            ]
          },
          {
            "title": "The Clockwork Alchemist",
            "image": "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
            "description": "Forgotten secrets revealed in town.",
            "progress": 60,
            "genre": ["thriller", "adventure"],
            "status": "ongoing",
            "author": "Charlotte Davis",
            "readingtime": [{ "value": 3 }],
            "logs": [
              {
                "date": { "day": "15", "month": "august" },
                "content": "In Chapter 3 of The Clockwork Alchemist, the protagonist unearths a hidden manuscript in the town's library. Its cryptic text hints at a long-forgotten alchemical formula, igniting a quest for knowledge and danger."
              },
              {
                "date": { "day": "28", "month": "september" },
                "content": "In Chapter 7 of The Clockwork Alchemist, the characters decipher an intricate mechanism that reveals a portal to a hidden world beyond their own, sparking a journey into the unknown."
              }
            ]
          },
          {
            "title": "The Oracle's Prophecy",
            "image": "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
            "description": "Global chase uncovers key's power.",
            "progress": 40,
            "genre": ["fantasy", "steampunk"],
            "status": "ongoing",
            "author": "Sophia Montgomery",
            "readingtime": [{ "value": 3 }],
            "logs": [
              {
                "date": { "day": "5", "month": "june" },
                "content": "In Chapter 10 of The Oracle's Prophecy, the characters venture into the heart of the enchanted forest. Amongst the ancient trees, they uncover an ancient stone tablet, etched with predictions that challenge their understanding of fate."
              },
              {
                "date": { "day": "18", "month": "july" },
                "content": "In Chapter 14 of The Oracle's Prophecy, a long-forgotten scroll provides a clue to the location of a mythical artifact, propelling the characters on a race against time to prevent its misuse."
              }
            ]
          },
          {
            "title": "The Silent Observer",
            "image": "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
            "description": "Global chase uncovers key's power.",
            "progress": 0,
            "genre": ["mystery", "steampunk"],
            "status": "list",
            "color": "#A431F9",
            "author": "Oliver Mitchell",
            "logs": [
              {
                "date": { "day": "20", "month": "september" },
                "content": "In the prologue of The Silent Observer, a chilling scene unfolds at an abandoned mansion. The sound of footsteps echoes through empty halls, setting the tone for a tale of suspense and mystery."
              },
              {
                "date": { "day": "3", "month": "november" },
                "content": "In Chapter 4 of The Silent Observer, a cryptic message found within an old pocket watch leads the characters into a web of intrigue that spans generations."
              }
            ]
          },
          {
            "title": "Book of Secrets",
            "image": "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
            "description": "Unveiling ancient mysteries.",
            "progress": 0,
            "genre": ["mystery", "adventure"],
            "status": "list",
            "color": "#A431F9",
            "author": "Isabella Patel",
            "logs": [
              {
                "date": { "day": "8", "month": "october" },
                "content": "In Chapter 4 of Book of Secrets, the protagonist stumbles upon an old dusty tome within the hidden archives of a forgotten library. As the first pages are turned, cryptic symbols and enigmatic diagrams begin to reveal a path towards uncovering age-old mysteries."
              },
              {
                "date": { "day": "17", "month": "november" },
                "content": "In Chapter 7 of Book of Secrets, the characters decipher a series of ancient inscriptions that provide clues to the location of a legendary artifact, setting them on a perilous journey across distant lands."
              }
            ]
          },
          {
            "title": "The Forgotten City",
            "image": "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
            "description": "Rediscovering a lost civilization.",
            "progress": 0,
            "genre": ["fantasy", "adventure"],
            "status": "list",
            "author": "Liam Thompson",
            "logs": [
              {
                "date": { "day": "12", "month": "january" },
                "content": "In the prologue of The Forgotten City, a renowned historian stumbles upon a cryptic map that leads to an ancient city buried beneath the sands. The quest for this forgotten city begins, intertwining history with the present."
              },
              {
                "date": { "day": "23", "month": "february" },
                "content": "In Chapter 3 of The Forgotten City, the characters explore the ruins of an abandoned temple, unearthing artifacts that hold the key to unlocking the city's mysterious past."
              }
            ]
          },
          {
            "title": "Secrets of the Past",
            "image": "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
            "description": "Unveiling ancient mysteries.",
            "progress": 60,
            "genre": ["mystery", "steampunk"],
            "status": "ongoing",
            "author": "Noah Collins",
            "readingtime": [{ "value": 3 }, { "value": 2 }],
            "logs": [
              {
                "date": { "day": "7", "month": "april" },
                "content": "In Chapter 5 of Secrets of the Past, a hidden chamber is discovered beneath the old manor. The group of explorers finds a journal that contains the firsthand account of a forgotten adventurer, setting the stage for a journey into the unknown."
              },
              {
                "date": { "day": "9", "month": "may" },
                "content": "In Chapter 7 of Secrets of the Past, the characters decipher an encrypted diary, revealing a trail of clues left behind by a long-lost ancestor who was entwined in a web of intrigue."
              }
            ]
          },
          {
            "title": "Mindscape",
            "image": "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
            "description": "Exploring the depths of the mind.",
            "progress": 40,
            "genre": ["psychology", "thriller"],
            "status": "ongoing",
            "author": "Ava Barnes",
            "readingtime": [{ "value": 1 }, { "value": 1 }, { "value": 1 }],
            "logs": [
              {
                "date": { "day": "17", "month": "march" },
                "content": "In Chapter 8 of Mindscape, the protagonist delves deeper into the realm of dreams, unlocking memories that were long forgotten. As layers of the subconscious are peeled away, a haunting truth emerges."
              },
              {
                "date": { "day": "9", "month": "april" },
                "content": "In Chapter 10 of Mindscape, the characters confront manifestations of their inner fears within the surreal landscapes of their minds, uncovering the hidden traumas that have shaped their lives."
              }
            ]
          }
    ],
    genre: [
      {name: "steampunk"} , 
      {name: "fantasy"} , 
      {name: "adventure"} , 
      {name: "psychology"} , 
      {name: "mystery"}, 
      {name: "thriller"}
    ],
    authors: [
        { name: "Sophia Montgomery"},
        { name: "Ethan Ramirez"},
        { name: "Isabella Patel"},
        { name: "Noah Collins"},
        { name: "Ava Barnes"},
        { name: "Liam Thompson"},
        { name: "Mia Johnson"},
        { name: "Benjamin Lee"},
        { name: "Charlotte Davis"},
        { name: "Oliver Mitchell"}
    ],
    status: [
      {name:"completed"},
      {name: "ongoing"},
      {name: "list"}
    ],
    config: {
      status: {
        colors: {
          "ongoing" : "red" , 
          "list" : "purple",
          "completed" : "green"
        }
      },
      genre: {
        colors: {
          "steampunk" : "red",
          "fantasy" : "purple",
          "adventure" : "orange",
          "psychology" : "red",
          "mystery" : "green",
          "thriller" : "purple"
        }
      }
    }
}

export function convertToObjects(arr , propertyName){
  return arr.map((cat) => ({[propertyName]: cat}))
}

export function getBookCategories(){
  return ["progress" , "genre", "status" , "rating" , "author"].map((cat) => ({name: cat}));
}

export function getGenreCategories(){
  return ["steampunk" , "fantasy" , "adventure" , "psychology" , "mystery", "thriller"];
}


export default bookData;