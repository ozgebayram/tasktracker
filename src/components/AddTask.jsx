import React from 'react'

const AddTask = () => {
  return (
	<div>
    <form className="row row-cols g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12 ">
                      <div className="form-outline mb-3" >
                        <input  type="text" id="form1" className="form-control" placeholder='Task here...' />
                      </div>
					  <div>
						<input type="date" id="form1" className="form-control" />
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