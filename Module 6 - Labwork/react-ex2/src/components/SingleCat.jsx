function SingleCat({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />

      <h2>{cat.name}</h2>

      <p>
        <strong>Scientific Name:</strong> {cat.latinName}
      </p>
    </div>
  );
}

export default SingleCat;