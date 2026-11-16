import BigCats from "./components/BigCats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Big Cats of the World</h1>
      <p>Add and delete big cat records using the form below.</p>

      <BigCats />
    </div>
  );
}

export default App;