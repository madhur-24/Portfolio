import React from "react";
import {Link} from "react-router-dom"

function Footer()
{
    return(
        <footer>
        <div className="container-fluid  text-center" style={{backgroundColor: "black"}}>
            <div className=" py-5">
               
                    <h2 className= "text-light"> Intrested in working with me?</h2>
                    <Link to ="/contact">
                    <button className="btn btn-outline-light btn-lg">
                        Lets talk
                    </button>
                    </Link>
                    
                
            </div>
        
             <div className="row">
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">
                        More Links</h5>
                        <Link to="/" className="text-light d-block">Blogs</Link>
                        <Link to ="/" className="text-light d-block">Home</Link>
                        <Link to ="/contact" className="text-light d-block">Contact Me</Link>
                        <Link to="/write-a-recommendation" className="text-light d-block">Write a Recommendation <i className="fas fa-heart text-light"></i></Link>
                </div>

                 <div className="col-12 col-md-4 py-3 text-light text-justify">
                    <p>
                        Greetings, I am Muskaan Banthia pursuing BTech in information technology from Banasthali Vidyapith.
                        Being coding entusiast in C and C++ .
                        I also have knowledge of Core Java, Python, HTML, CSS, Android App development, Database Management System.
                        I would like to utilise my skills to contribute to a product-based company.
                    </p>
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-3">
                        Social</h5>
                        <a href="/">
                            <i className="fab fa-linkedin h1 d-block text-light"></i>
                        </a>

                        <a href="/">
                            <i className="fab fa-github h1 d-block text-light"></i>
                        </a>
                        <a href="/">
                            <i className="fas fa-envelope h1 d-block text-light"></i>
                        </a>
                    </div>
                   <div >
                       <p className="text-muted align-items-center text-center py-3">
                           Copyright @ Muskaan Banthia
                       </p>
                   </div>

            </div>       
           
        </div>
    </footer>
    );

}

export default Footer;