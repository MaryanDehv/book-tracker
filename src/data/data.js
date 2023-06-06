// placeholder content until database is set up

const bookData = {
    books: [
        {
            "title" : "Whispers of the Forgotten",
            "image" : "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
            "description" : "Forgotten secrets revealed in town.",
            "genre" : ["steampunk" , "fantasy" , "adventure"],
            "status" : "completed"
        },
        {
            "title" : "Echoes of Eternity",
            "image" : "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
            "description" : "Global chase uncovers key's power.",
            "genre" : ["mystery" , "psychology"],
            "status" : "completed"
        },
        {
            "title" : "The Clockwork Alchemist",
            "image" : "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
            "description" : "Forgotten secrets revealed in town.",
            "genre" : ["thriller" , "adventure"]
        },
        {
            "title" : "The Oracle's Prophecy",
            "image" : "https://w.wallhaven.cc/full/9m/wallhaven-9m2e68.jpg",
            "description" : "Global chase uncovers key's power.",
            "genre" : ["fantasy" , "steampunk"]
        },
        {
            "title" : "The Silent Observer",
            "image" : "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
            "description" : "Global chase uncovers key's power.",
            "genre" : ["mystery" , "steampunk"]
        }
        
    ],
    genre: {
        "steampunk" : "red",
        "fantasy" : "purple",
        "adventure" : "orange",
        "psychology" : "red",
        "mystery" : "green",
        "thriller" : "purple"
    },
    status: {
        "completed": [0 , 1],
        "ongoing": [2 , 3 , 0],
        "list": [4 , 2 , 3]       
    }
}

export default bookData;