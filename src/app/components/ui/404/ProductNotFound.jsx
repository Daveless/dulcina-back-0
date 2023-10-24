import React from "react";

const ProductNotFound = ({ searchInput }) => {
  if (searchInput.lenght) return <div></div>;
  else return <div>
    <h3>NO SE HAN ENCONTRADO RESULTADOS</h3>
  </div>;
};

export default ProductNotFound;
