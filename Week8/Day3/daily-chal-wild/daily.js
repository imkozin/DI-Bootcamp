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

const usernames = users.map(user => user.username);

// const usernames = getUsername(gameInfo);

// function getUsername(array) {
//     const usernames = [];
//     for (let i = 0; i < array.length; i++) {
//         usernames.push(array[i].username);
//     }
//     console.log(usernames);
// }

// function getUsername(users) {
//     const usernames = [];
//     for (let user of users) {
//         usernames.push(user.username);
//     }
//     console.log(usernames);
// }

// function getWinner(users) {
//     const winners = [];
//     for (let user of users) {
//         if (user.score > 5) {
//             winners.push(user)
//         }
//     }
//     return winners;
// }

const winners = gameInfo.filter(player => player.score > 5);

// function getTotalScore(players) {
//     let total = 0;
//     for (let player of players) {
//         total += player.score
//     } 
//     return total;
// }

const totalScore = gameInfo.reduce((total, player) => total + player.score, 0);
