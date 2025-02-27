import React from "react";
import { Link } from "react-router-dom";

//dummy data to mimic real fetching data
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function Products() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/*Defining and using dynamic Routes*/}
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
