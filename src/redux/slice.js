import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://localhost:3000/hello/index');
  return response.data.content;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({ ...state, status: 'succeeded', greeting: action.payload }))
      .addCase(fetchGreeting.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export default greetingSlice.reducer;
