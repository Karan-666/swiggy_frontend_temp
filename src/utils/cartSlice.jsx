import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// create slice accpets an object and 3 things are there inside
// 1. name of slice, 2. initial state, 3. reducers
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // All reducer functions have 2 things, initial-state and action
        // if we don't want to use action, we only use state
        // state.item will give us the state array
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action)=>{
            // using splice
            // state.items.splice(action.payload, 1);
            // using filter (safer as it don't change data directly)
            state.items = state.items.filter( (item, index) => {
                return (index!==action.payload)
            } )
        },
        clearCart:(state)=>{
            // setting array length to 0 will clear this, there is no such thing as arr.clear() in js
            state.items.length = 0;
        },
    }
})

// namely exporting the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions
// exporting default the reducers
export default cartSlice.reducer

// we are exporting from here to use them in app store