import React, {  useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "../Course_Details/context";

function MyCourses() {
  const [cartItems, setCartItems] = useState([]);
  const {authTokens} = useContext(AuthContext)

  useEffect(() => {
    axios.get("http://localhost:8000/mycourses/",{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    }) 
      .then((response) => {
        console.log("Fetched courses:", response.data);
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, [authTokens]);

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:8000/mycourses/${id}/`,{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    })
      .then((response) => {
        console.log("Course removed successfully:", response.data);
        setCartItems(cartItems.filter(course => course.id !== id));
      })
      .catch((error) => {
        console.error("Error removing course:", error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <section className="col-md-12">
          <div className="card">
            <h5 className="card-header">My Courses</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user_title}</td>
                      <td>{item.user_duration}</td>
                      <td>
                        <Link to={item.user_link}>
                          <button className="btn btn-sm btn-danger">
                            <i className="bi bi-youtube"></i> Watch
                          </button>
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-sm btn-danger m-2"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyCourses;
