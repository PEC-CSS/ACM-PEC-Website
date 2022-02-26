import React from "react";
import '../assets/stylesheets/Events.css';
import { BiTimeFive } from 'react-icons/bi'
import data from './events.json'

const Eventlist = () =>{
    return(
    data.map( events => {
        return(
            <div key={ events.id }>
                <article className="event-card reveal fade-bottom">
                    <div className="card-container">
                        <div className="card-img">
                            <img src={events.imgsrc} alt="event-img" className="img-fluid"/>
                        </div>
                        <div className="card-content">
                            <div className="event-date">
                                <p><BiTimeFive  className="timer-icon"/><span className="date" >Event Date - </span>{events.date}</p>
                            </div>
                            <div className="event-heading">
                                {events.title}
                            </div>
                            <div>
                                <p className="event-details">{events.content}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
    )
    )
}

function Events(){
    return(
        <div>
            <div className="event-wrapper">
                <h1 className="title">Events</h1>
                <div>
                    Ongoing Events
                </div>
            </div>
            <div className="events-section">
                <div className="event-container">
                    <Eventlist />
                </div>
            </div>
        </div>
    )
}

export default Events;