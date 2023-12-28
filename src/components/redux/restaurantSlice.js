import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// accept an ction type string and a function that returns a promise and generates a thunk that  dispatches the pending / fullfilled / reject / 
// action type based on that promise
//thunk is not a part of slice it is seperate method in toolkit

// api call using thunk
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data)
    console.log(result);
    return result
})


const restuarantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, // pending statee
        allRestaurant:[], // resolve state
        searchRestaurant:[],
        error:"" // reject state
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state, action)=>{
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state, action)=>{
            state.loading = false
            state.allRestaurant = ""
            state.error = action.error.message
        })

    },

    reducers: {
        search : (state, action)=>{
            state.allRestaurant = state.allRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))

        }
    }

})

export const {search} = restuarantSlice.actions
export default restuarantSlice.reducer