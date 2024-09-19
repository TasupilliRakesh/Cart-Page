import React, { useState } from 'react'
// import Cart1 from './Cart1';
import ProductList from './ProductList'
import ShoppingCartIcon from  '@mui/icons-material/ShoppingCart';

const Cart = () => {
    let [state,setState] = useState(0)
  return (
    <div>
        <header style={{border:"2px solid red", backgroundColor:"pink", height:"102px"}}>
            <img style={{height:"100px", width:"100px"}} src="https://th.bing.com/th?id=OIP.LoFlqG1HYdUb8WtWK6hKNAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2" alt="" />
            <ShoppingCartIcon></ShoppingCartIcon>
            <sup>{state}</sup>
        </header>
        <br/>

        <ProductList state={state} setState={setState} />
      
    </div>
  )
}

export default Cart
