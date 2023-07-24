import './App.css';
import { useState } from 'react';

function App() {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

    
    const voteCounter = (languageName) => {
        const updateLanguages = languages.map(language => {
            if (language.name === languageName) {
                return { ...language, votes: language.votes + 1 };
            }
            return language;
        });
        setLanguages(updateLanguages)
    }

    return (
      <div className="App">
        <header className="App-header">
        <h1>Vote Your Language!</h1>
            {
                languages.map(language => {
                    return(
                        <div>
                            <table>
                            <tbody>
                                <tr>
                                <td>{language.votes}</td>
                                <td>{language.name}</td>
                                <td><button onClick={()=> voteCounter(language.name)}>Click Here</button></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                )})
            }
        </header>
      </div>
    );
  }
  
  export default App;

//   const App = () => {
//     const [languages, setLanguages] = useState([
//       { name: "Php", votes: 0 },
//       { name: "Python", votes: 0 },
//       { name: "JavaSript", votes: 0 },
//       { name: "Java", votes: 0 },
//     ]);
  
//     const vote = (lang) => {
//       lang.votes++;
//       setLanguages([...languages])
//     }
//     return (
//       <div className="App">
//         <header className="App-header">
//         {
//           languages.map((item,indx)=>{
//             return (
//               <div key={indx}>
//                 {item.name} {item.votes} <button onClick={()=>vote(item)}>Add</button>
//               </div>
//             )
//           })
//         }
//         </header>
//       </div>
//     );
//   };

//   export default App;

// import React, {Component} from 'react';

// class Vote extends React.Component {
//     constructor() {
//         super();
//         this.state= {
//             languages: [
//                 {name: "Php", votes: 0},
//                 {name: "Python", votes: 0},
//                 {name: "JavaSript", votes: 0},
//                 {name: "Java", votes: 0}
//             ],
//         }
//     }

//     vote = (lang) => {
//         const {languages} = this.state;
//         lang.vote++; 
//         this.setState({languages:[...this.state.languages]})
//     }

//     render (){
//         const {languages} = this.state; // without this part
//         return (
//             <div className="App">
//               <header className="App-header">
//               {
//                 languages.map((item,indx)=>{ // or this.state.languages
//                   return (
//                     <div key={indx}>
//                       {item.name} {item.votes} <button onClick={()=>vote(item)}>Add</button>
//                     </div>
//                   )
//                 })
//               }
//               </header>
//             </div>
//           );
//     }
// }

// export default Vote;