import { useState } from "react";
import SingleCat from "./SingleCat";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheetah%20(Acinonyx%20jubatus)%20female%202.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/CougarDSCF3732.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20at%20Edinburgh%20Zoo.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sri%20Lankan%20leopard%20(Panthera%20pardus%20kotiya)%20female%203.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lion%20(Panthera%20leo)%20male%20Serengeti.jpg",
  },
  {
    id: 6,
    name: "Snow Leopard",
    latinName: "Panthera uncia",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Snow%20Leopard%20front%20close-up.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bengal%20tiger%20(Panthera%20tigris%20tigris)%20female.jpg",
  },
];

function BigCats() {
  const [displayCats, setDisplayCats] = useState(cats);

  function sortAlphabetically() {
    setDisplayCats([...displayCats].sort((a, b) =>
      a.name.localeCompare(b.name)
    ));
  }

  function reverseList() {
    setDisplayCats([...displayCats].reverse());
  }

  function filterPanthera() {
    setDisplayCats(
      cats.filter((cat) => cat.latinName.startsWith("Panthera"))
    );
  }

  function resetList() {
    setDisplayCats(cats);
  }

  return (
    <div>
      <div className="controls">
        <button onClick={sortAlphabetically}>
          Sort Alphabetically
        </button>

        <button onClick={reverseList}>
          Reverse List
        </button>

        <button onClick={filterPanthera}>
          Filter Panthera
        </button>

        <button onClick={resetList}>
          Reset
        </button>
      </div>

      <div className="cats-container">
        {displayCats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default BigCats;