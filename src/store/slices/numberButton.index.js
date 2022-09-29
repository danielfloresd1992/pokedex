import { createSlice } from '@reduxjs/toolkit';


export const listButton = createSlice({
	name: 'listButton',
    initialState: 5,
    reducers: {
        spreadButton: (state, action) => {
            let button = action.payload
            return button;
        }
    }
})

export const { spreadButton } = listButton.actions;

export default listButton.reducer;
