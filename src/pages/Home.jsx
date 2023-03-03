import axios from 'axios';
import React, { useState,useEffect} from 'react'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'

const Home = () => {
  const [task,setTask]=useState([]);
  
  const url = "https://63f6a4a39daf59d1ad8c3818.mockapi.io/api/tasks"

  const getTasks= async ()=>{
    try {
      const {data} = await axios(url);
      setTask(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks()
  }, [])
  
  return (
	
	<section className="vh-100" style={{backgroundColor: '#b0cecb'}}>
        <div className="container py-5 h-100  "  >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7  rounded-3" >
              <div className="card rounded-3 p-2 bg-secondary bg-gradient">
                <div className="card-body p-4 rounded-3" style={{backgroundColor: '#35353b'}}>
                  <h4 className="text-center my-3 pb-3 text-white">Task Tracker</h4>
                  <AddTask getTasks={getTasks}/>
                  <TaskList task={task} getTasks={getTasks}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	
  )
}

export default Home