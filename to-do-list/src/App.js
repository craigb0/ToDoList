import './App.css';
import React from "react";
import ItemList from './components/ItemList';
import taskArray from './components/initalTasks';
import AddButton from './components/AddButton';


class App extends React.Component {
	state ={
		arrayLen: 0,
	};
	
	addTask = () => {
		this.setState(prevState => ({
			arrayLen: prevState.arrayLen + 1,
		}))
	}
	
	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
					<AddButton onClickFunction = {this.addTask}/>
					{this.state.arrayLen}
				</div>
				
				<div className='App'>
					<ItemList tasks={taskArray}/>
				</div>
    		</div>
  		);
	}
}

export default App;
