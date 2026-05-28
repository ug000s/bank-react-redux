import { createSlice } from '@reduxjs/toolkit';
import { fetchQuote } from '../api/quoteActions';

const quoteSlice = createSlice({
    name: 'quote',
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchQuote.pending, () => 'Pending...')
        .addCase(fetchQuote.fulfilled, (_state, action) => action.payload)
        .addCase(fetchQuote.rejected, () => 'Failed to fetch quote. Please try again later.')
    }
});

// type: 'quote/putQuote'
export default quoteSlice.reducer;