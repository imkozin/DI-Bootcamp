import './App.css';
// import Color from './components/Color';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

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
      </header>
    </div>
  );
}

export default App;
