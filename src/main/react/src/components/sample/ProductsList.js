import React from 'react';
import PropTypes from 'prop-types';

const ProductsList = ({products}) => {
  return (
    <table className="table">
      <thead>
      <tr>        
        <th>Product Name</th>      
      </tr>
      </thead>
      <tbody>
        {products.map(product =>
        <tr>        
            <td>{product.productName}</td>    
        </tr>
        )}     
      </tbody>
    </table>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsList;
