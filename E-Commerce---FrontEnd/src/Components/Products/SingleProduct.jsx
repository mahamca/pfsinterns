// import React from 'react'
// import { Card, Col, Row } from 'antd';
// import { useNavigate } from 'react-router-dom';
// const { Meta } = Card;


// const SingleProduct = ({product,index}) => {
// const naviagate=useNavigate()
//   return (
//     <div >
//         <Row gutter={3}>
//     <Col span={3}>
//     <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={ <img src={product.image} alt="Converted" style={{ maxWidth: '300px' }} />}
//   >
//     <Meta title="" description="" value={product.name} ></Meta>
//     <tr>
//         <td>Product Name : {product.pname}</td></tr>
//         <tr>
//         <td>Price:{product.price}</td>
//     </tr>
//     <tr>Gst : {product.gst}</tr>
//     <button>BUY NOW</button><button onClick={()=>naviagate(`/products/addtocart/${product._id}`)}>ADD TO CART</button>
//   </Card>
//     </Col>
    

//   </Row>
//     </div>
//   )
// }

// export default SingleProduct

import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const SingleProduct= () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Simple E-Commerce Store</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleProduct;


