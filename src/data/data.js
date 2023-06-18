// placeholder content until database is set up

const bookData = {
        books: [
        {
        title: "Whispers of the Forgotten",
        image: "https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
        description: "Forgotten secrets revealed in town.",
        genre: ["steampunk", "fantasy", "adventure"],
        progress: "30",
        status: "completed",
        color: "#F95731",
        rating: 5,
        author: "Noah Collins"
        },
        {
        title: "Echoes of Eternity",
        image: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png",
        description: "Global chase uncovers key's power.",
        genre: ["mystery", "psychology"],
        progress: "70",
        status: "completed",
        rating: 3,
        color: "#359EFF",
        author: "Ava Barnes"
        },
        {
        title: "The Clockwork Alchemist",
        image: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
        description: "Forgotten secrets revealed in town.",
        progress: "60",
        genre: ["thriller", "adventure"],
        status: "ongoing",
        color: "#359EFF",
        author: "Charlotte Davis"
        },
        {
        title: "The Oracle's Prophecy",
        image: "https://w.wallhaven.cc/full/9m/wallhaven-9m2e68.jpg",
        description: "Global chase uncovers key's power.",
        progress: "40",
        genre: ["fantasy", "steampunk"],
        status: "ongoing",
        color: "#359EFF",
        author: "Sophia Montgomery"
        },
        {
        title: "The Silent Observer",
        image: "https://cdn.pixabay.com/photo/2017/03/27/19/16/buckled-book-2180047_960_720.jpg",
        description: "Global chase uncovers key's power.",
        progress: "80",
        genre: ["mystery", "steampunk"],
        status: "list",
        color: "#A431F9",
        author: "Oliver Mitchell"
        }
    ],
    genre: {
        steampunk: "red",
        fantasy: "purple",
        adventure: "orange",
        psychology: "red",
        mystery: "green",
        thriller: "purple"
    },
    status: {
        completed: [0, 1],
        ongoing: [2, 3, 0],
        list: [4, 2, 3]
    },
    authors: [
        { name: "Sophia Montgomery", checked: false },
        { name: "Ethan Ramirez", checked: false },
        { name: "Isabella Patel", checked: false },
        { name: "Noah Collins", checked: false },
        { name: "Ava Barnes", checked: false },
        { name: "Liam Thompson", checked: false },
        { name: "Mia Johnson", checked: false },
        { name: "Benjamin Lee", checked: false },
        { name: "Charlotte Davis", checked: false },
        { name: "Oliver Mitchell", checked: false }
    ]      
}

export default bookData;