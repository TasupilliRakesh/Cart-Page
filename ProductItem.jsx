import React, { useState } from 'react'

const ProductItem = ({id,image,name,price,state,setState}) => {
  let [state1,setState1]=useState(0)
  let incrementState = () => {
    setState1(state1+1)
    console.log(state1);
}
let decrementState = () => {
    if(state1!=0){
        setState1(state1-1)
    console.log(state1);
    }
}
  return (
    <div style={{border:"2px solid red",width:"270px", padding: "20px"}}>
        <img src={image} alt="" style={{height:"250px", width:"270px", borderRadius:"10px"}} />
        <h3>{name}</h3>
        <p>Rs: {price}</p>
        <button  onClick={()=>{setState(state+1)}}>Add to Cart</button>
        {/* <button onClick={incrementState}>+</button>{state1}
      <button onClick={decrementState}>-</button> */}
      
    </div>
  )
}

export default ProductItem
