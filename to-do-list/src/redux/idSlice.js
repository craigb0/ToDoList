import {createSlice} from "@reduxjs/toolkit";

export const idSlice = createSlice({
	name: "id",
	initialState: {
		value: 1,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},

		decrement: (state) => {
			state.value -= 1;
		},

		setId: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const {increment, decrement, setId} = idSlice.actions;
export const selectId = (state) => state.id.value;
export default idSlice.reducer;
