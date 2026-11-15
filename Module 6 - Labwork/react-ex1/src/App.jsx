
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Module 6 - Exercise 1</h1>

      <Greeting />

      <Greeting name="John" />

      <Greeting name="Shivnil">
        Welcome to React JS!
      </Greeting>
    </div>
  );
}

export default App;
