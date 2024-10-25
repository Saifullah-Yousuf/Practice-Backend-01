import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get('/api/products')
    .then((response)=>{
      setProducts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <div>
        <h1>Backend Over</h1>
        <h3>PRODUCTS: {products.length}</h3>


        {
          products.map((products , index)=>(
            <div key={products.id}>
              <h1>{products.id}</h1>
              <h2>{products.title}</h2>
              <h3>{products.description}</h3>
              <h2>{products.price}</h2>
              <h2>{products.category}</h2>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

