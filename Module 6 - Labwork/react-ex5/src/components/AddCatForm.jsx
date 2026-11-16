import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newCat = {
      id: Date.now(),
      name,
      latinName,
      image,
    };

    onAddCat(newCat);

    setName("");
    setLatinName("");
    setImage("");
  }

  return (
    <form className="add-cat-form" onSubmit={handleSubmit}>
      <h2>Add a New Big Cat</h2>

      <input
        type="text"
        placeholder="Cat Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Scientific Name"
        value={latinName}
        onChange={(event) => setLatinName(event.target.value)}
        required
      />

      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;