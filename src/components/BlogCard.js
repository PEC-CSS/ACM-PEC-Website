import React from 'react';
import '../utils/stylesheets/BlogCard.css'

export const BlogCard = ({title,description,image,date,i}) => {
    return(
        <div 
            className='blog-card-root'
            id={`blog-card-${i}`}
            onMouseMove={(e)=>{

                const horizontal = (e.clientX - (e.currentTarget.offsetLeft + e.currentTarget.clientWidth/2)) / e.currentTarget.clientWidth
                
                const vertical = (e.clientY - (e.currentTarget.clientHeight/2)) / e.currentTarget.clientHeight

                const rotateX = 10*horizontal
                const rotateY = -5*vertical


                document.getElementById(`blog-card-${i}`).style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1,1,1)`
            }}
            onMouseOut={(e)=>{
                document.getElementById(`blog-card-${i}`).style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
            }}>
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