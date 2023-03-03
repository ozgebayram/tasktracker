import axios from 'axios'
import React, { useState } from 'react'

const AddTask = ({getTasks}) => {
  const [tasks,setTasks]=useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTask = {tasks,date};
    addTasks(newTask)
    setTasks("");
    setDate("")
  }

  const addTasks = async(newTask)=>{
    const url = "https://63f6a4a39daf59d1ad8c3818.mockapi.io/api/tasks"
    try {
      await axios.post(url,newTask);
    } catch (error) {
      console.log(error);
    }
    getTasks()
  }
  return (
	<div>
    <form className="row row-cols g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={handleSubmit}>
                    <div className="col-12 ">
                      <div className="form-outline mb-3" >
                        <input  type="text" id="form1" className="form-control" placeholder='Task here...' value={tasks} onChange={(e)=> setTasks(e.target.value)}/>
                      </div>
					  <div>
						<input type="date" id="form1" className="form-control" value={date} onChange={(e)=> setDate(e.target.value)}/>
					  </div>
                    </div>
                    <div className="">
                      <button type="submit" style={{backgroundColor: '#867514'}} className="btn text-light">Get tasks</button>
                    </div>
                  </form>
  </div>
  )
}

export default AddTask