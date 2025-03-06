import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditUserPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="modal">
          <div className="modal_container">
            <div>
              <label htmlFor="edit_name">Edit Name:</label>
              <input type="text" id="edit_name" name="edit_name" placeholder="Edit Name" />
            </div>
            <div>
              <label htmlFor="edit_email">Edit Email:</label>
              <input type="text" id="edit_email" name="edit_email" placeholder="Edit Email" />
            </div>
            <button onClick={() => navigate('/')}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default EditUserPage
