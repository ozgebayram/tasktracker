import React from 'react'
import {FiDelete} from 'react-icons/fi'


const TaskList = ({task,getTasks}) => {
  const handleDelete=()=>{
    const url = "https://63f6a4a39daf59d1ad8c3818.mockapi.io/api/tasks"

    try {
      
    } catch (error) {
      
    }

  }
  return (
	<div>
    <table className="table mb-4 text-white">
                    <thead>
                      <tr >
                        <th scope="col">No.</th>
                        <th scope="col">Task</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {task?.map((item)=>{
                        const {id,date,tasks}= item;
                        return(
                        <tr key={id}>
                        <th scope="row">{id}</th>
                        <td>{tasks}</td>
                        <td>{date}</td>
                        <td>
                        <FiDelete
                        size={22}
                        type="button"
                        onClick={()=>{handleDelete}}/>
                        </td>
                      </tr>
                      )})}
                      
                    </tbody>
                  </table>
  </div>
  )
}

export default TaskList