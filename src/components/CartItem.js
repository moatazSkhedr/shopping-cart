import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { removeItem } from '../future/cartSlice';
import { useDispatch } from 'react-redux/es/exports';
import { increase ,decrease } from '../future/cartSlice';
export default function CartItem({id , title , price , img , amount}) {
    const dispatch = useDispatch();
  return (
    <Container>
        <Product>
        <div className='image'>
        <img src={img}/>    
     </div>
     <div className='title'>
        <h2>{title}</h2>
     </div>
     <div className='price'>
        <p>price: {price}$</p>
     </div>
     <div className='add-amount'>

<svg onClick={()=>{
    if(amount === 1){
        dispatch(removeItem(id))
        return  ;
    }
    dispatch(decrease({id}))}}  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
<p>{amount}</p>
<svg onClick={()=>dispatch(increase({id}))} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
     </div>
     <div className='remove-item'>
        <p onClick={()=>{
            dispatch(removeItem(id))
        }}>remove</p>
     </div>

        </Product>
    </Container>
  )
}
const Container = styled.div`
    
    display:flex;
    background-color:#ECEFF1;
    margin:auto;
    img{
        width:300px;
        height:250px;
    }
    .title h2{
        margin-left:5px;
        font-size:26px;
        font-weight:400;
    }
    .price{
        margin-left:5px;
        font-weith:100;
        font-size:20px; 
    }
    .add-amount{
        display:felx;
        padding:5px;
        cursor:pointer;
    }
    .remove-item{
        font-size:20px;
        font-weight:100;
        color:#2196F3;
        cursor:pointer;
        margin-left:5px;

    }
`
const Product = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap : wrap;
`