import React from 'react'
import {FiDelete} from 'react-icons/fi'


const TaskList = ({task,getTasks}) => {
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
                        type="button"/>
                        </td>
                      </tr>
                      )})}
                      
                    </tbody>
                  </table>
  </div>
  )
}

export default TaskList