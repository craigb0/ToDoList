import {configureStore} from "@reduxjs/toolkit";
import idReducer from "./idSlice";
import taskListReducer from "./taskListSlice";

export const store = configureStore({
	reducer: {
		id: idReducer,
		taskList: taskListReducer,
	},
});
