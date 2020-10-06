import React, { useState } from 'react';
import dataStorages from '../../DataStore/DataStore';
import EventTask from '../EventTask/EventTask';
import Header from "../Header/Header";

const Home = () => {
    const [event ,setEvent] = useState(dataStorages)
    return (
        <div >
            <Header/>
            <h1 className="App">I CROW BY HELPING PEOPLE IN NEED.</h1>
            
            <form className="example App" >
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            <br/>
            
            <div className = "row">
            {
                event.map(
                    (evt) => (<EventTask key={evt.image} evt = {evt}> </EventTask>)
                        )
            }
            </div>
           
        </div>
    );
};

export default Home;