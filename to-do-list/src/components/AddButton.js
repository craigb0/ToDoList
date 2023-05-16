import React, { useState } from 'react';

const AddButton = (props) => {
	const [taskData, setTaskData] = useState('');
    const [done, setDone] = useState(false);

    const handleClick = () => {
        if (taskData.trim() !== '') {
          props.onClickFunction({ title: taskData, completed: done, id:props.id});
          setTaskData('');
          
        }
      };
    
    
    return (
        <div className='AddButton'>
          Task Name:{' '}
          <input
            type="text"
            value={taskData}
            onChange={(e) => setTaskData(e.target.value)}
          />
          <br></br>
          Done:{' '}
          <input 
            type="checkbox"  //won't uncheck for some reason
            value={done}
            onChange={(e) => setDone(e.target.checked)}
          />
          <br></br>
          <button onClick={handleClick}>Add Task</button>
        </div>
      );
}

export default AddButton;