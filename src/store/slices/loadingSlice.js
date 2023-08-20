import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state) => {
        state.value = true;
    },
    setIsNotLoading: (state) => {
        state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsLoading, setIsNotLoading } = loadingSlice.actions

export default loadingSlice.reducer
