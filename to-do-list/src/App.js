import './App.css';
import React from 'react';
import ItemList from './components/ItemList';


const testData =[
	{"title": "delectus aut autem","completed": false},
	{"title": "delectus aut autem","completed": false},
	{"title": "delectus aut autem","completed": false},
];
class App extends React.Component {
	render() {
		return (
    		<div>
    			<div className='App-header'>
        			To Do List
				</div>
				
				<div className='App'>
					<ItemList tasks={testData}/>
				</div>
    		</div>
  		);
	}
}

export default App;
