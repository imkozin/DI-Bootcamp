const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
const usernames = []
gameInfo.forEach((element) => usernames.push(`${element.username}!`));
console.log(usernames); // const usernames = ["john!", "becky!", "susy!", "tyson!"]

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
const winners = [];
gameInfo.forEach((element) => {
    if (element.score > 5) {
        winners.push(element.username);
    }
});

console.log(winners); // const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)
total = 0;
gameInfo.forEach((element) => {
    total += element.score;
})
console.log(total);
