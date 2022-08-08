import { createSlice } from "@reduxjs/toolkit/";
import { cartItems } from "../cartItems";
const initialState = {
    amount:4,
    total:0,
    basket : [],
    cartItems: cartItems,
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        clearCart :(state)=>{
            state.cartItems = [];
            state.amount = 0 ; 
        },
        removeItem: (state , actions)=>{
            // console.log(actions);
            const itemId = actions.payload
            state.cartItems = state.cartItems.filter((item)=>
                item.id !== itemId
            )

            // )
            // state.basket =state.cartItems.filter((item)=>
            //     item.id === itemId
            // )
            
        },
        increase:(state , actions)=>{
            const cartItem = state.cartItems.find((item)=>item.id ===actions.payload.id);
            cartItem.amount = cartItem.amount + 1 ;
            state.amount = state.amount + 1;
        },
        decrease:(state , actions)=>{
            const cartItem = state.cartItems.find((item)=>item.id === actions.payload.id);
            cartItem.amount = cartItem.amount - 1 ;
            state.amount = state.amount - 1;
        },
        calculateTotal :(state)=>{
            let amount = 0 ;
            let total = 0 ;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total +=item.amount * item.price;
            });
            state.amount =amount;
            state.total = total;
        }

    }
})
console.log(cartSlice)
export const {clearCart , removeItem , increase , decrease , calculateTotal} = cartSlice.actions;
export default cartSlice.reducer;