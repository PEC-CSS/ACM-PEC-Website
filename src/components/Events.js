import React from "react";
import "../assets/stylesheets/Events.css";
import { BiTimeFive } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import sanityClient from "../sanity/client";

const Eventlist = ({ events }) => {
    return events.map((event) => {
        return (
            <div key={event._id}>
                <article className="event-card reveal fade-bottom">
                    <div className="card-container">
                        <div className="card-img">
                            <img
                                src={event.mainImage.asset.url}
                                alt="event-img"
                                className="img-fluid"
                            />
                        </div>
                        <div className="card-content">
                            <div className="event-date">
                                <p>
                                    <BiTimeFive className="timer-icon" />
                                    <span className="date">Event Date - </span>
                                    {event.publishedAt}
                                </p>
                            </div>
                            <div className="event-heading">{event.title}</div>
                            <div>
                                <p className="event-details">
                                    {event.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    });
};

function Events() {
    const [eventPosts, setEventPosts] = useState([]);

    useEffect(() => {
        const query = `*[_type=='event'] {
            _id,
            title,
            mainImage{
                    asset->{
                    _id,
                    url
                  }
                },
            content,
            publishedAt,
        }`;
        sanityClient
            .fetch(query)
            .then((data) => setEventPosts(data))
            .catch((err) => console.log(err.message));
    });
    return (
        <div>
            <div className="event-wrapper">
                <h1 className="title">Events</h1>
                <div>Ongoing Events</div>
            </div>
            <div className="events-section">
                <div className="event-container">
                    <Eventlist events={eventPosts} />
                </div>
            </div>
        </div>
    );
}

export default Events;
