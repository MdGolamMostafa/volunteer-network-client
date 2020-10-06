import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import "./Registration.css"
import { useParams } from "react-router";
import { useForm } from "react-hook-form";


const Registration = () => {
    const {imageTitle} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit,  errors } = useForm();

    const onSubmit = (data) => {
        const registerInfo = { ...loggedInUser ,register: data};
    
        fetch("https://stark-reef-86330.herokuapp.com/registerInfo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };
    
    return (
        <section className="row">
            <div className = "col-3 center">
    <form className="ship-form  " onSubmit={handleSubmit(onSubmit)}>
    <img  style={{height: '66px'}} src="https://i.ibb.co/RhkQ613/Group-1329.png" alt="" />

      <input
        name="name"
        defaultValue={loggedInUser.name}
        ref={register({ required: true })}
        placeholder="Your name"
      />
      {errors.name && <span className="error">Name is required</span>}
          
      <input
        name="email"
        defaultValue={loggedInUser.email}
        ref={register({ required: true })}
        placeholder="Your email"
      />
      {errors.email && <span className="error">Email is required</span>}
            
      <input
        name="date"
        defaultValue = {new Date()}
        ref={register({ required: true })}
        placeholder="insert date"
      />
      {errors.address && <span className="error">Date is required</span>}
           
      <input
        name="description"
        ref={register({ required: true })}
        placeholder="please write description here"
      />
      {errors.phone && <span className="error">Description  is required</span>}
          
      <input
        name="taskType"
        defaultValue={imageTitle}
        ref={register({ required: true })}
        placeholder="please add task type here"
      />
    {errors.phone && <span className="error">Task type  is required</span>}
        <br/>
      <input type="submit" />
      <br/>
      <Link to="/login">Already have an account?</Link>
    </form>
            
        </div>
        </section>
        
    );
};

export default Registration;