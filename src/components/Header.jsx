import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import {AiTwotoneHome} from 'react-icons/ai'

import '../styles/header.scss'
import { useSelector } from 'react-redux'
const Header = () => {

  const {cartItems} = useSelector(state => state.cart);
  return <nav>
    <h2>CARTSTORE</h2>
    <div>
        <Link to={"/"} ><AiTwotoneHome/></Link>
        <Link to={"/cart"} >
            <BsCart4 />
            <p>{cartItems.length}</p>
            </Link>
        

    </div>
  </nav>
}
export default Header