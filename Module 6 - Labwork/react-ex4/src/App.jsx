import BigCats from "./components/BigCats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Big Cats of the World</h1>
      <p>Explore, sort and filter different big cat species.</p>
      <BigCats />
    </div>
  );
}

export default App;