import { createSlice } from '@reduxjs/toolkit';


export const userName = createSlice({
	name: 'userName',
    initialState: '',
    reducers: {
        insertName: (state, action) => {
            let name = action.payload
            return name;
        }
    }
})

export const { insertName } = userName.actions;

export default userName.reducer;
