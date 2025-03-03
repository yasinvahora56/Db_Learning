import ("./Table.css")
import { useState } from 'react';
import { Link } from "react-router";

const Table = () => {
    const [modal, setModal] = useState()
    const [editModal, setEditModal] = useState()

    const toggelModal = () => {
        setModal(!modal)
    }

    const editToggleModal = () => {
        setEditModal(!editModal)
    }

  return (
    <>
    <div class="header">
        <input type="text" class="search_bar" placeholder="Search..." />
        <div>
            <button onClick={toggelModal}>Add New</button>
        </div>
    </div>
        <div class="container">
    <table>
        <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>1.</td>
            <td>Yasin Vahora</td>
            <td>iamyasin123@gmail.com</td>
            <td><button onClick={editToggleModal}>Edit</button><button>Delete</button></td>
        </tr>
    </table>    
        </div>  
        {modal && 
        <div class="modal">
            <div class="modal_container">
                <div>
                <label htmlFor="note">Name:</label>
                <input type="text" name="Add_name" placeholder="Name" />
                </div>
                <div>
                <label htmlFor="note">Email:</label>
                <input type="text" name="add_email" placeholder="Email" />
                </div>
            <Link>Submit</Link>  
            </div>
        </div> 
        }
        {editModal && 
        <div class="modal">
            <div class="modal_container">
                <div>
                <label htmlFor="note">Edit Name:</label>
                <input type="text" name="edit_name" placeholder="edit Name" />
                </div>
                <div>
                <label htmlFor="note">Edit Email:</label>
                <input type="text" name="edit_email" placeholder="edit Email" />
                </div>
            <button>Submit</button>
            </div>
        </div> 
        }
    </>
  )
}

export default Table
