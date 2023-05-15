import './App.css';
import React from 'react';
import ToDoItem from './components/ToDoItem.js'

class App extends React.Component {
	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
				</div>
				
				<div className='App'>
					<ToDoItem/>
				</div>
    		</div>
  		);
	}
}

export default App;
