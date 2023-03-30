import React from 'react'
import '../styles/cart.scss'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'



const Cart = () => {

    const {cartItems, subTotal, shipping, tax, total,} = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const increment = (id)=> {
        dispatch({
            type: "addToCart",
            payload: {id}
        })
        dispatch({ type: "calculatePrice"})
    }
    const decrement = (id)=> {
        dispatch({
            type: "decrement",
            payload: id
        })
        dispatch({ type: "calculatePrice"})

    }
    const deleteHandler = (id)=> {
        dispatch({
            type: "deleteFromCart",
            payload: id
        })
    }




  return (
    <div className='cart'
    >

        <main>
           {
           cartItems.length > 0 ? (
            cartItems.map(i => (
                <CartItem 
            
                imgSrc= {i.imgSrc}
                name ={i.name}
                price ={i.price}
                qty ={i.quantity}
                id={i.id}
                key = {i.id}
                decrement={decrement}
                increment={increment}
                deleteHandler={deleteHandler}
                />
            ))
           ) : <h1>No items are in your cart yet</h1>
           }
        </main>

        <aside>
            <h2>Subtotal: ₹{subTotal}</h2>
            <h2>Shipping: ₹{shipping}</h2>
            <h2>Tax: ₹{tax}</h2>
            <h2>Total: ₹{total}</h2>
            <h3>shipping is free above ₹500</h3>

        </aside>
    </div>
  )
}

const CartItem = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id}) => (
<div className="cartItem">
    <img src={imgSrc} />
    <article>
        <h3>{name}</h3>
        {/* <h3>{qty}</h3> */}
        <p>₹{price}</p>
    </article>

    <div>
        {/* id send hori hen click pe  */}
        <button onClick={() => decrement(id)} >-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)} >+</button>

    </div>



    <AiFillDelete onClick={() => deleteHandler(id)} />
</div>
)

export default Cart