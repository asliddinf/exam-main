// Har bir productning id, title, description, price hossalari bo'lishi kerak.
import { useState } from "react";
function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newProduct = {
      id: Date.now(),
      title: title,
      description: description,
      price: price,
    };
    setProducts([...products, newProduct]);
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <h2>Mahsulot qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mahsulot nomi"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Tavsif"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Narxi"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br /><br />

        <button type="submit">Qo‘shish</button>
      </form>
      <hr />
      <h3>Mahsulotlar</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p><b>ID:</b> {product.id}</p>
          <p><b>Title:</b> {product.title}</p>
          <p><b>Description:</b> {product.description}</p>
          <p><b>Price:</b> {product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CreateProduct;

