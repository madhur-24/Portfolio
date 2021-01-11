
import React, { useState } from "react";
import RecommendationCard from "./RecommendationCard";
import { v4 as uuid } from "uuid";
import {Modal,Button} from 'react-bootstrap';
import { Consumer } from "../Context";

function RecommendationSection() {
  const [show, setShow] = useState(false);
  const [id,setId] = useState(0);
  const handleClose = () => {setShow(false)};
  const handleShow = (id) => {setShow(true);setId(id)};
  return(
    <Consumer>
      {(value) => {
        const { recommendations } = value;
        return(
<div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar" style={{overflow: "hidden"}}>
    
        {recommendations.map((recommendation,key) => (
          <div onClick={()=>{handleShow(key)}} className="col-12 col-md-4">
          <RecommendationCard key={uuid()} recommendation={recommendation} />
          </div>
        ))}
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{recommendations[id].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{recommendations[id].message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>  
      </div>
    </div>
        );
      }}
    </Consumer>
  );


  
}

export default RecommendationSection;