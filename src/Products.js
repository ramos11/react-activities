import React from 'react';

function Products (props) {
  const productsRecords= props.productsJson;

  return (
    <div>
        Product records are: {productsRecords}
      </div>
  );
}

export default Products;