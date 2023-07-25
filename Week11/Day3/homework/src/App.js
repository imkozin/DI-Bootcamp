import './App.css';
// import Color from './components/Color';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import FormComponent from './components/FormComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        
        <FormComponent/>
      </header>
    </div>
  );
}

export default App;
