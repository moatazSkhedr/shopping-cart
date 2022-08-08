import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components'
import { useSelector , useDispatch } from 'react-redux';
import { clearCart } from '../future/cartSlice';
export default function CartContainer() {
    const disptach = useDispatch();
    const {amount , cartItems ,total } = useSelector((state)=>state.cart);
    // console.log(...basket);
    if(amount ===0)
  return (
    <If_amount_empty>
        <h3>Your Bage is empty </h3>
    </If_amount_empty>
      
  )
    return(
        <If_amount_true>
            <h1>Your Bage </h1>
            <Item>
            {
                cartItems.map((item)=>{
                    return <CartItem key = {item.id} {...item}/>
                })
            }
            </Item>
            <Footer>
                <div>
                    <h3 className='total'>Total : </h3>
                    <h3> {total}</h3>
                </div>
                <button  onClick={()=>disptach(clearCart())} >Clear Cart</button>

            </Footer>
        </If_amount_true>
    )
}
const If_amount_empty = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin-top:30px;    
`
const If_amount_true = styled.div`
    margin:20px;
    
    padding:10px;
    h1{
        display:flex;
        align-items:center;
        justify-content:center;
    }

`
const Item = styled.div`
    
    display:felx;
    flex-wrap:wrap;
    


  
`
const Footer = styled.div`
    display:flex;
    flex-direction:column;
   

    div{
        display:flex;
        h3{
            padding:10px;
        }
    }
    button{
        height:50px;
        color:white;
        width:100px;
        background-color:#607D8B;
    }

`