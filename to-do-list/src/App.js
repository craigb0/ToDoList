import './App.css';
import React from "react";
import ItemList from './components/ItemList';
import AddButton from './components/AddButton';


class App extends React.Component {
	state ={
		taskList: [
			{"title": "delectus aut autem","completed": false},
			{"title": "delectus aut autem","completed": true},
			{"title": "delectus aut autem","completed": false},],
	};
	
	addTask = (taskData) => {
		this.setState(prevState => ({
			taskList: [...prevState.taskList, taskData],
		}))
	}
	
	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
					<AddButton onClickFunction = {this.addTask}/>
				</div>
				
				<div className='App'>
					<ItemList tasks={this.state.taskList}/>
				</div>
    		</div>
  		);
	}
}

export default App;
