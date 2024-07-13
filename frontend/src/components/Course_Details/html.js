import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Html() {
  const { setCourse, user, authTokens } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/courses/")
      .then((response) => {
        console.log("Courses:", response.data);
        const correct = response.data.filter(course => course.course_name.toLowerCase() === "html");
        setCourses(correct);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const handleButtonClick = (action, course) => {
    setButtonsDisabled(true);
    action(course);
    setTimeout(() => setButtonsDisabled(false), 5000);
  };

  const addToCart = (course) => {
    axios.get("http://localhost:8000/mycourses/",{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    })
      .then((response) => {
        const existingCourses = response.data;
        const courseExist = existingCourses.find((item) => item.user_title === course.title && item.user_course_name === course.course_name);
        
        if (!courseExist) {
          setCourse([...user, course]);

          axios.post("http://localhost:8000/add_to_cart/", {
            user_course_name: course.course_name,
            user_title: course.title,
            user_duration: course.duration,
            user_link: course.link,
          },{
            headers:{
              'Authorization':`Bearer ${authTokens.access}`
            }
          })
            .then((response) => {
              console.log("Course added to cart successfully:", response.data);
              toast.success("Course added to cart successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            })
            .catch((error) => {
              console.error("Error adding course to cart:", error);
              toast.error("Error adding course to cart!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            });
        } else {
          toast.error("Course already exist in cart!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
        }
      })
      .catch((error) => {
        console.error("Error checking existing course in cart:", error);
      });
  };
  const addToFav = (course) => {
    axios.get("http://localhost:8000/favouritecourses/",{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    })
      .then((response) => {
        const existingCourses = response.data;
        const courseExist = existingCourses.find((item) => item.user_title === course.title && item.user_course_name === course.course_name);

        
        if (!courseExist) {
          setCourse([...user, course]);

          axios.post("http://localhost:8000/add_to_fav/", {
            user_course_name: course.course_name,
            user_title: course.title,
            user_duration: course.duration,
            user_link: course.link,
          },{
            headers:{
              'Authorization':`Bearer ${authTokens.access}`
            }
          })
            .then((response) => {
              console.log("Course added to Favourite successfully:", response.data);
              toast.success("Course added to Favourite successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            })
            .catch((error) => {
              console.error("Error adding course to Favourite:", error);
              toast.error("Error adding course to Favourite!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            });
        } else {
          toast.error("Course already exist in Favourite!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
        }
      })
      .catch((error) => {
        console.error("Error checking existing course in Favourite:", error);
      });  
  };
  
  return (
    <div> 
      <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img src="/assats/html.jpeg" className="img-thumbnail" alt="..." />
            </div>
            <div className="col-8">
                <h3>HTML</h3>
                <p className="fw-bold">HTML stands for Hyper Text Markup Language</p>
                <p className="fw-bold">HTML is the standard markup language for creating Web pages</p>
                <p className="fw-bold">HTML describes the structure of a Web page</p>
                <p className="fw-bold">HTML consists of a series of elements</p>
                <p className="fw-bold">HTML elements tell the browser how to display the content</p>
                <p className="fw-bold">HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
            </div>
        </div>
      
      {/* Course Videos */}
      <div className="card mt-4 mb-5">
        <div className="BackHeader card-header d-flex justify-content-center">
            <h3>Course Videos</h3>
        </div>
        <div className="BackBody card-body">
        <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Course Name</th>
                      <th>Duration</th>
                      <th>Add To Cart</th>
                      <th>Add To Favourite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.duration}</td>
                        <td>
                          <div className=" d-flex justify-content-center">
                            <button onClick={() => handleButtonClick(addToCart, course)} className='btn btn-sm custon-cart m-2' disabled={buttonsDisabled}><i className='bi bi-cart-plus'></i></button>
                          </div>
                        </td>
                        <td>
                          <div className=" d-flex justify-content-center">
                            <button onClick={() => handleButtonClick(addToFav, course)} className='btn btn-sm custom-favourite m-2' disabled={buttonsDisabled}><i class="bi bi-emoji-heart-eyes"></i></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
        </table>
      </div>
      </div>
            
  </div>
  <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
  />
  </div>
  );
}

export default Html;
