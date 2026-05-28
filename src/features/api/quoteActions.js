import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuote = createAsyncThunk(
    'quote/fetchPending',
    async () => {
        const res = await fetch('https://api.gameofthronesquotes.xyz/v1/random')
        const data = await res.json()
        return data.sentence
    }
)