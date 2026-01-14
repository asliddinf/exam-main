function Product({ products = [] }) {
  return (
    <div>
      <h3>Mahsulotlar ro‘yxati</h3>

      {products.length === 0 && <p>Hech qanday mahsulot yo‘q</p>}

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
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

export default Product;
