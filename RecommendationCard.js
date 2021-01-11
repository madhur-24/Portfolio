import React, { useEffect, useState } from "react";
import {Modal,Button} from 'react-bootstrap';

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  
  return (
    <div>
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{message.slice(0,22)}</h4>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
