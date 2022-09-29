import { createSlice } from '@reduxjs/toolkit';


export const numberPage = createSlice({
	name: 'numberPage',
    initialState: 1,
    reducers: {
        setPage: (state, action) => {
            let numberPage = action.payload
            return numberPage;
        }
    }
})

export const { setPage } = numberPage.actions;

export default numberPage.reducer;