import React from "react";
import '../utils/stylesheets/GroupCard.css'

export const GroupCard = ({title,description,image}) =>{
    return(
        <div className="group-card-root">
            <img src={image} alt={title} className="group-card-image" />
            <div className="group-card-content">
                <p className="group-card-title">{title}</p>
                <p className="group-card-description">{description}</p>
            </div>
        </div>
    )
}