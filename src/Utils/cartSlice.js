import {createSlice} from "@reduxjs/toolkit"

const cartSlice =createSlice({
    name: 'cart',
    initialState : {
        items : [],
    },
    
    reducers: {
        addItem :(state,action)=> {
            //state mutation is Mandatory
            state.items.push(action.payload);
        } ,
        removeItem : (state,action)=> {
            state.items.pop();
        },
        clearCart : (state,action)=>{
            // becuase we cant mutate state directly 
            // i.e state.items=["Priyash"];
            // this is because of immer
            state.items.length =0; //[]

            // also we can
            // return [];
        }, 
    },
});

export const { addItem , removeItem ,clearCart }=cartSlice.actions;

export default cartSlice.reducer;