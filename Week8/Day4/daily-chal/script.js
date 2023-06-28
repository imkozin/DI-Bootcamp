// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video {
    constructor(title, uploader, time) {
        this.titleV = title;
        this.uploaderV = uploader;
        this.timeV = time
    }

    watch() {
        return `${this.uploaderV} watched all ${this.timeV} seconds of ${this.titleV}!`
    }
}

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
const video1 = new Video('Tennis Highlights', 'IlyaTennis', 20)
console.log(video1.watch())
// Instantiate a second Video instance with different values.
const video2 = new Video('Break Point show', 'IlyaTennis', 60)
console.log(video2.watch())
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// const videos = [
//     new Video("Nature Documentary", "NatureLover789", 600),
//     new Video("Cooking Masterclass", "ChefCooking123", 480),
//     new Video("Fitness Workout", "FitnessGuru456", 360),
//     new Video("Travel Vlog", "WanderlustTraveler789", 720),
//     new Video("DIY Crafts", "CraftyCreator123", 240)
// ];

// videos.forEach(video => {
//     console.log(video.watch())
// })  

const catalog = [
    {
    title : "Nature Documentary",
    uploader : "NatureLover789",
    time : 600
    },
    {
    title : "Cooking Masterclass",
    uploader : "ChefCooking123",
    time : 480
    },
    {
    title : "Fitness Workout",
    uploader : "FitnessGuru456",
    time : 360
    },
    {
    title : "Travel Vlog",
    uploader : "WanderlustTraveler789",
    time : 720
    },
    {
    title : "DIY Crafts",
    uploader : "CraftyCreator123",
    time : 240
    }
]

catalog.forEach((video) => {
    console.log(new Video(video.title, video.uploader, video.time).watch())
})
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.