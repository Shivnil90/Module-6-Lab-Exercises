import SingleCat from "./SingleCat";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cheetah%20(Acinonyx%20jubatus)%20female%202.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/CougarDSCF3732.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20at%20Edinburgh%20Zoo.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sri%20Lankan%20leopard%20(Panthera%20pardus%20kotiya)%20female%203.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lion%20(Panthera%20leo)%20male%20Serengeti.jpg",
  },
  {
    id: 6,
    name: "Snow Leopard",
    latinName: "Panthera uncia",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Snow%20Leopard%20front%20close-up.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bengal%20tiger%20(Panthera%20tigris%20tigris)%20female.jpg",
  },
];

function BigCats() {
  return (
    <div className="cats-container">
      {cats.map((cat) => (
        <SingleCat key={cat.id} cat={cat} />
      ))}
    </div>
  );
}

export default BigCats;