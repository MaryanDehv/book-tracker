// placeholder content until database is set up

const bookData = {
        books: [
            {
                title: "Whispers of the Forgotten",
                image: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                description: "Forgotten secrets revealed in town.",
                genre: ["steampunk", "fantasy", "adventure"],
                progress: 100,
                status: "completed",
                rating: 5,
                author: "Noah Collins"
              },
              {
                title: "Echoes of Eternity",
                image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
                description: "Global chase uncovers key's power.",
                genre: ["mystery", "psychology"],
                progress: 100,
                status: "completed",
                rating: 3,
                author: "Ava Barnes"
              },
              {
                title: "The Clockwork Alchemist",
                image: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                description: "Forgotten secrets revealed in town.",
                progress: 60,
                genre: ["thriller", "adventure"],
                status: "ongoing",
                rating: 3,
                author: "Charlotte Davis"
              },
              {
                title: "The Oracle's Prophecy",
                image: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                description: "Global chase uncovers key's power.",
                progress: 40,
                genre: ["fantasy", "steampunk"],
                status: "ongoing",
                rating: 2,
                author: "Sophia Montgomery"
              },
              {
                title: "The Silent Observer",
                image: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                description: "Global chase uncovers key's power.",
                progress: 0,
                genre: ["mystery", "steampunk"],
                status: "list",
                color: "#A431F9",
                rating: 1,
                author: "Oliver Mitchell"
              },
              {
                title: "Book of Secrets",
                image: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                description: "Unveiling ancient mysteries.",
                progress: 0,
                genre: ["mystery", "adventure"],
                status: "list",
                color: "#A431F9",
                rating: 2,
                author: "Isabella Patel"
              },
              {
                title: "The Forgotten City",
                image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
                description: "Rediscovering a lost civilization.",
                progress: 0,
                genre: ["fantasy", "adventure"],
                status: "list",
                rating: 3,
                author: "Liam Thompson"
              },
              {
                title: "Secrets of the Past",
                image: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
                description: "Unveiling ancient mysteries.",
                progress: 60,
                genre: ["mystery", "steampunk"],
                status: "ongoing",
                rating: 4,
                author: "Noah Collins"
              },
              {
                title: "Mindscape",
                image: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
                description: "Exploring the depths of the mind.",
                progress: 40,
                genre: ["psychology", "thriller"],
                status: "ongoing",
                rating: 5,
                author: "Ava Barnes"
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