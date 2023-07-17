import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import users from './users.json'
import User from './components/User';

// PROPS name="John"

function App() {
  return (
    <div>
        {users.map((item) => {
            return <User userinfo={item} key={item.id}/>
          })};
    </div>
  );
}

export default App;
