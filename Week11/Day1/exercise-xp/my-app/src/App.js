import './App.css';
import './components/Exercise.css';
//import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise3 from './components/Exercise3';

// Exercise 1: With JSX
// Instructions
// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

// const myelement = <h1>I Love JSX!</h1>;

// const sum = 5 + 5;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {myelement}
//         <p>Hello World!</p>
//         <p>React is {sum} times better with JSX</p>
//       </header>
//     </div>
//   );
// }


// Exercise 2 : Object
// In the App.js file, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component.
// In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag.
// Each <li> corresponds to one animal from the favAnimals array.
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };

// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <h3>{user.firstName}</h3>
//           <h3>{user.lastName}</h3>
//           <UserFavoriteAnimals animals={user.favAnimals}/>
//         </header>
//       </div>
//   )
// }


// Exercise 3 : HTML Tags In React

// PART I:

// In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise component to the App.js file and display it.

function App() {
  return (
      <div className="App">
          <Exercise3 />
      </div>
  )
}

export default App;
