import React, { useState } from 'react';
import useList from '../../hooks/useList';

function TaskList() {
  
   const tasks = useList([]);
   const [newTask, setNewTask] = useState('');
   
   const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask('');
   };
   const handleInputChange = (event) =>{
    setNewTask(event.target.value);
   }

   const handleClearList = (event) => {
    event.preventDefault();
    tasks.clear();
   }

   const handleSortList = () => {
    tasks.sortList();
    setNewTask(null);
   }


   const handleReverse = () => {
    tasks.reverse();
    setNewTask();
  }

  return (
    <div>
        <h1>Task List</h1>
        <form onSubmit={handleSubmit}>
            <input 
                value={newTask} 
                onChange={handleInputChange} 
                placeholder='New Task' 
                type="text" 
            />

            <button type='submit'>Create Task</button>
        </form>
        {tasks.isEmpty()? 
            (<p>Task List is Empty</p>)
            :
            (
                <ul>
                    {tasks.value.map((task, index) =>
                        (
                            <li key={index}>
                                <input 
                                    type='checkbox'
                                    onClick={() => tasks.remove(index)}
                                    checked={false}
                                />
                                { task }
                            </li>
                        )
                    )}
                    <button 
                        type='button' 
                        onClick={handleClearList}
                    >
                        Remove List
                    </button>
                    <button 
                        type="button" 
                        onClick={handleSortList}
                    >
                        Sort Tasks
                    </button>
                    <button 
                        type="button" 
                        onClick={handleReverse}
                    >
                        Reverse Tasks
                    </button>
                </ul>
            )
        }
    </div>
  )
}

export default TaskList;