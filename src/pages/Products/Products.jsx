import React, { useState } from "react";

function Products({ products = [], deleteProduct, editProduct, clearProducts }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const startEditing = (product) => {
    setEditingId(product.id);
    setEditTitle(product.title);
    setEditDescription(product.description);
    setEditPrice(product.price);
  };

  const saveEdit = () => {
    editProduct(editingId, {
      title: editTitle,
      description: editDescription,
      price: editPrice,
    });
    setEditingId(null);
  };

  return (
    <div style={{ maxWidth: 700, margin: "20px auto" }}>
      <h2>Mahsulotlar ro‘yxati</h2>

      {products.length === 0 ? (
        <p>Mahsulotlar mavjud emas</p>
      ) : (
        <>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #4c1cbb",
                padding: 10,
                marginBottom: 10,
                borderRadius: 5,
              }}
            >
              {editingId === p.id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{ width: "100%", marginBottom: 5 }}
                  />
                  <input
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    style={{ width: "100%", marginBottom: 5 }}
                  />
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    style={{ width: "100%", marginBottom: 5 }}
                  />
                  <button onClick={saveEdit} style={{ marginRight: 5 }}>
                    Saqlash
                  </button>
                  <button onClick={() => setEditingId(null)}>Bekor qilish</button>
                </>
              ) : (
                <>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <strong>{p.price}</strong>
                  <br />
                  <button onClick={() => startEditing(p)} style={{ marginRight: 5 }}>
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(p.id)}>Delete</button>
                </>
              )}
            </div>
          ))}

          <button onClick={clearProducts} style={{ marginTop: 10 }}>
            Barcha mahsulotlarni o‘chirish
          </button>
        </>
      )}
    </div>
  );
}

export default Products;
