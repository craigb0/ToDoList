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
			state.value = state.value
				.filter((task, i) => i + 1 !== action.payload)
				.map((task, i) => ({
					...task,
					id: i + 1,
				}));
		},

		editTask: (state, action) => {
			const index = action.payload[0];
			const newTask = action.payload[1];
			const tasks = state.value.slice();
			tasks[index - 1] = newTask;
			state.value = tasks;
		},

		setList: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const {addTask, removeTask, editTask, setList} = taskListSlice.actions;
export const selectTaskList = (state) => state.taskList.value;
export default taskListSlice.reducer;
