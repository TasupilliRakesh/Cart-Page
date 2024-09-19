import React from 'react'
import {products} from './Products'
import ProductItem from './ProductItem'
const ProductList = ({state,setState}) => {
  return (
    <div style={{display:"grid",gridTemplateRows:"400px 400px",gridTemplateColumns:"1fr 1fr 1fr",rowGap:"20px"}}>
      {products.map(({id,image,name,price})=>{
        return <ProductItem  key={id} image={image} name={name}  price={price} state={state} setState={setState}/>
      })}
    </div>
  )
}

export default ProductList
