import { createSlice } from '@reduxjs/toolkit';


export const page = createSlice({
	name: 'numberPage',
    initialState: 0,
    reducers: {
        changePage: (state, action) => {
            let page = action.payload
            return page;
        }
    }
})

export const { changePage } = page.actions;

export default page.reducer;
