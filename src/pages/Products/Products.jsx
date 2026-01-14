import React from "react";

function Products({ products = [], clearProducts }) {
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
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <strong>{p.price}</strong>
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
