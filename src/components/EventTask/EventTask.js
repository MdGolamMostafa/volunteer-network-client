import React from 'react';
import { useHistory, useParams } from "react-router-dom";

const EventTask = (props) => {
      const {image,imageTitle} = props.evt;
    const history = useHistory();
    const handleTaskType = (taskType) =>{ 
        history.push(`/register`); 
    }

    return (       
            <div onClick={() => handleTaskType(imageTitle)} className="col-md-3">
                <img style={{height: '303px'}} src={image} alt=""/>
                <h3>{imageTitle}</h3>
               
            </div>
    );
};
export default EventTask;