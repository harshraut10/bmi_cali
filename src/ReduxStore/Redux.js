import { createSlice } from "@reduxjs/toolkit";
const initialStateValue={
 BMImetric:0,
 BMIstd:0,
 email:'',
 pwd:''

}
    
export const storeSlice= createSlice({
    name:'BMI',
    initialState:{value:initialStateValue},
    reducers:{
        changeFn:(state,action)=>{
            state.value=action.payload;
        },


    }
}); 

export const {changeFn}=storeSlice.actions
export default storeSlice.reducer;