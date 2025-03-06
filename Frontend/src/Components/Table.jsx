import "./Table.css";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <input type="text" className="search_bar" placeholder="Search..." />
        <div>
          <button onClick={() => navigate('/add')}>Add New</button>
        </div>
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Yasin Vahora</td>
              <td>iamyasin123@gmail.com</td>
              <td>
                <button onClick={() => navigate('/edit')}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;