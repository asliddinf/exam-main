import { useState } from "react";

function CreateProduct({ addProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      description,
      price,
    };

    addProduct(newProduct);

    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "20px auto" }}>
      <h2>Mahsulot qo‘shish</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <button type="submit">Qo‘shish</button>
    </form>
  );
}

export default CreateProduct;
