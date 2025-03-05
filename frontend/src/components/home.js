
import {Link} from 'react-router-dom';
import AuthContext from './Course_Details/context'; 
import { useContext, useEffect } from 'react';
import axios from 'axios';
import './text.css'
function Home() {

  const {loguser} = useContext(AuthContext)

  useEffect(() => {
    axios.get("http://localhost:8000/api/")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);


    return (
      <div className="container my-4">
        <div className='d-flex justify-content-center'>
          <h4 className='animated-text'>Hello {loguser.username} !!</h4>
        </div>
        
        <h3 className="border-bottom pb-1 mt-4">Latest Courses </h3> 
        <div className="row justify-content-center row-cols-auto">
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card ">
              <div className="image"><Link to='./python'><img src="/assats/python.jpeg" className="card-img-top" alt="..." /></Link></div>
              
              <div className="card-body">
                
                <Link to="./python" className="custom-button btn float-end">Python</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
              <div className="image"><Link to='./c'><img src="/assats/C.jpeg" className="card-img-top" alt="..." /></Link></div>
              
              <div className="card-body">
              <Link to="./c" className=" custom-button btn float-end">C</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./mysql'><img src="/assats/mysql.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./mysql" className="custom-button btn float-end">MySQL</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./html" className=" custom-button btn float-end">HTML </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./css" className="custom-button btn float-end">CSS </Link>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="border-bottom pb-1 my-4 mt-3">Offered Courses </h3>
        <div className="row justify-content-center row-cols-auto">
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./mongodb'><img src="/assats/mongodb.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./mongodb" className="custom-button btn float-end">Mongodb </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./javascript'><img src="/assats/js.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./javascript" className="custom-button btn float-end">Javascript </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./r'><img src="/assats/r.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./r" className="custom-button btn float-end">R </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./java'><img src="/assats/java.jpeg" className="card-img-top" alt="..." /></Link></div> 
              <div className="card-body">
              <Link to="./java" className="custom-button btn float-end">JAVA </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 col-sm-4">
            <div className="hovercard card">
            <div className="image"><Link to='./php'><img src="/assats/php.jpeg" className="card-img-top" alt="..." /></Link></div>
              <div className="card-body">
              <Link to="./php" className="custom-button btn float-end">PHP </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="border-bottom pb-1 my-4 mt-3">About </h3>
        <div id="carouselExampleControls" className="about carousel slide text-white py-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>KGIT Services  is a leading global information technology, consulting, and business process services company.</p>
                </blockquote> 
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>We connect the power of intelligent computing, robotics, cloud, analytics, quantum computing and emerging technologies to help our clients adapt to the digital world and make them successful.</p>
                </blockquote>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A company recognized globally for its wide range of services, a strong assurance of sustainability, and good corporate citizenship, we have 30+ dedicated employees serving clients. Together, we discover ideas and connect the dots to build a better and bold new future.</p>
                </blockquote>
              </figure>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    );
  }
  export default Home;