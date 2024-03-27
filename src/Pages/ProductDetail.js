import React from "react";

// Defining and using dynamic Routes
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetail</h1>
      {/* Defining and using dynamic Routes*/}
      <p>{params.productId}</p>
      <p>
        {/* previous route path */}
        {/* relative default is route  */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail;
