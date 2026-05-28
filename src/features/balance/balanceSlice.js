import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
    name: 'balance',
    initialState: 0,
    reducers: {
        deposit: (state, action) => state + action.payload,
        withdraw: (state, action) => state - action.payload < 0 ? state : state - action.payload
    }
})

// type: 'balance/deposit' | 'balance/withdraw'
export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;
