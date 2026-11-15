import BigCats from "./components/BigCats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Big Cats of the World</h1>
      <p className="subtitle">
        Discover seven fascinating species of big cats.
      </p>

      <BigCats />
    </div>
  );
}

export default App;