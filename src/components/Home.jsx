import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import '../styles/home.scss'

const img1 = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/618gNo+ohxL._SX679_.jpg"

const img2 = "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61y2VVWcGBL._AC_UL320_.jpg"

const img3 ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31iuuphSvGL._SX425_.jpg"

const img4 ="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41W-o6xu2bL._SX323_BO1,204,203,200_.jpg"



const Home = () => {

  const productList =[ 
    { name: "Mac book",
    price: 199900,
    imgSrc: img1,
    id:"dbkjew" },

    { name: "Smart Watch",
     price: 248,
     imgSrc: img2,
     id:"dbkhkgljew" },

     { name: "ONECYA lamp",
     price: 480,
     imgSrc: img3,
     id:"dbkhkdcjew" },

     { name: "Do it today",
     price: 150,
     imgSrc: img4,
     id:"dbnjdwnlljew" }
    
    ]

     const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({type :"addToCart", payload:options})
    dispatch({ type: "calculatePrice"})

    toast.success("added to cart")
    
  }

  return (
    <div className='home' >
    {
      productList.map(i => (
        <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id}
        handler={addToCartHandler} />
        
      ))
    }

    </div>
  )
}

const ProductCard =( {name,id,price,imgSrc,handler} ) => (
 <div className='productCard'>
  <img src={imgSrc} alt='no pics rightnow' />
  <p>{name}</p>
  <h4>₹{price}</h4>
  <button onClick={()=>handler({name,price,id, quantity:1, imgSrc})} >Add to cart</button>
 </div>
)

export default Home