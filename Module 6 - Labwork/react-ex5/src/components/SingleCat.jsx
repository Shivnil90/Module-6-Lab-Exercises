function SingleCat({ cat, onDelete }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />

      <h2>{cat.name}</h2>

      <p>
        <strong>Scientific Name:</strong> {cat.latinName}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(cat.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default SingleCat;