import React from 'react';
import '../utils/stylesheets/BlogCard.css'

export const BlogCard = ({title,description,image,date}) => {
    return(
        <div className='blog-card-root'>
            <img className='blog-card-img' src={image} alt={title} />
            <div className='blog-card-content'>
                <a className='blog-card-title' href='/'>{title}</a>
                <p className='blog-card-description'>{description}</p>
                <hr className='blog-card-hr'/>
                <div className='blog-card-date-content'>
                    <img src='https://cdn-icons-png.flaticon.com/512/4320/4320177.png' alt="" className='calendar-img' />
                    <span className='blog-card-date'>{date}</span>
                </div>
            </div>
        </div>
    )
}