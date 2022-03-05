import React from "react";
import products from "../../data/product";

export default (props) => {
  const tableProducts = products.map((product, i) => {
    return (
      <tr key={product.id} className={i % 2 == 0 ? "Par" : "Impar"}>
        <td>{product.id}</td>
        <td>{product.nomeProduto}</td>
        <td>{product.preco.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Nome do Produto</th>
          <th>Prelo</th>
        </tr>
      </thead>
      <tbody>{tableProducts}</tbody>
    </table>
  );
};
