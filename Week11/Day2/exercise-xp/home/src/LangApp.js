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