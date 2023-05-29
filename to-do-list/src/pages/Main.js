import "../App.css";
import React, {useEffect} from "react";
import ItemList from "../components/ItemList";
import AddButton from "../components/AddButton";
import axios from "axios";
import {selectId, setId} from "../redux/idSlice";
import {useSelector, useDispatch} from "react-redux";
import {setList} from "../redux/taskListSlice";
import {MDBContainer} from "mdb-react-ui-kit";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((response) => {
				const apiTasks = response.data;
				const tasksToSet = apiTasks.slice(0, 5);
				dispatch(setList(tasksToSet));
			})
			.catch((error) => {
				console.error("Error fetching tasks:", error);
			})
			.finally(() => {
				dispatch(setId(6));
			});
	}, []);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MDBContainer fluid>
				<div
					className='d-flex justify-content-center align-items-top'
					style={{height: "15vh"}}
				>
					<div className='text-center'>
						<h1 className='mb-3'>To Do List</h1>
						<AddButton />
					</div>
				</div>
			</MDBContainer>
			<MDBContainer>
				<div className='align-items-center'>
					<ItemList />
				</div>
			</MDBContainer>
		</LocalizationProvider>
	);
};

export default Main;
