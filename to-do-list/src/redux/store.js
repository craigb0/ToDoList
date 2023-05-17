import { configureStore } from "@reduxjs/toolkit";
// import Reducer function from 'path';

export default configureStore({
	reducer: {
		id: idReducer,
		taskList: taskListReducer,
	},
});
