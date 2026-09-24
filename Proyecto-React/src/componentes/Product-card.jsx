function ProductCard({ producto }) {
  return (
    <article
      className="product-card"
      data-id={producto.id}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <a href="/catalogo">
        {producto.nombre}
      </a>

      <span>Precio: </span>

      <span className="price">
        {producto.precio}
      </span>
    </article>
  );
}

export default ProductCard;
