import React from "react";
import Muskaan from "../assets/IMG-20191109-WA0013.jpg";
import PropTypes from "prop-types";

function Title(props)
{
    //const name ="Muskaan Banthia";
    //const leadText="I am pursuing BTech in IT from Banasthali Vidyapith ";

    const{ name, leadText} = props;
    return(
        <div className="container ">
        <div className="row text-center align-items-center py-5">
            <div className="col-12 col-md-6">
                <img className=" img-fluid rounded-circle w-75" src={Muskaan}
                alt="muskaan banthia"/>


            </div>
            <div className="col-12 col-md-6 my-5 " style={{ fontSize: "50px" }}>
                
                    Hi,I am <span class="text-info">{name}</span> 
                
                    
                <h4 className="font-weight-light">{leadText}
                </h4>
            </div>
        </div>
    </div>
    );
}
Title.defaultProps={
    name:"Muskaan Banthia",
    leadText:"I am pursuing BTech in IT from Banasthali Vidyapith"
}

Title.propTypes = {
    name : PropTypes.object.toString.isRequired,
    
};

export default Title;