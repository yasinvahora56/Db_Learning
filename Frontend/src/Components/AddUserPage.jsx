import React, { useState } from 'react'
import axios from "axios"

const AddUserPage = () => {
    const users = {
        fname : "",
        email : "",
    }
    const [user, setUser] = useState(users)
    const inputHandler = (e) =>{
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }
    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5050/crud/creat', user)
        .then((response) => {
            console.log(response)
        }).catch(error => console.log(error))
    }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
      <div className="modal">
          <div className="modal_container">
            <div>
              <label htmlFor="fname">Name:</label>
              <input type="text" id="fname" onChange={inputHandler} name="fname" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" onChange={inputHandler} name="email" placeholder="Email" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddUserPage
