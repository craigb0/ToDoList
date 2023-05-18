import {createSlice} from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
	name: "taskList",
	initialState: {
		value: [],
	},
	reducers: {
		addTask: (state, action) => {
			state.value.push(action.payload);
		},

		removeTask: (state, action) => {
			state.value.splice(action.payload, 1);
		},

		editTask: (state, action) => {
			const {index, newTask} = action.payload;
			state.value[index] = newTask;
		},
	},
});

export const {addTask, removeTask, editTask} = taskListSlice.actions;
export const selectTaskList = (state) => state.taskList.value;
export default taskListSlice.reducer;
