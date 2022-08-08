import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/exports'
export default function Navbar() {
    const {amount} = useSelector((state)=>state.cart);
    // console.log(amount);
  return (
    <Nav>
        <h1>Shopping</h1>
        
        <Basket>
        
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
         <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
        <h1>{amount}</h1>

        </Basket>
        
       


    </Nav>
  )
}
const Nav = styled.div`
    height:70px;
    background-color:#647687;
    color:white;
    padding:6px;
    display:flex;
    align-items:center;
    justify-content:center;
    h1{
        flex:1;
        cursor:pointer;
    }
`
const Basket = styled.div`
    margin-right:50px;
    display:felx;
    align-items:center;
    justify-content:center;
    h1{
        padding:20px;
    }
    svg{
        cursor:pointer
    }
`