import { useState } from 'react';
import '../utils/stylesheets/blogs.css';
import { CgProfile } from 'react-icons/cg';
import { BsCalendarWeek } from 'react-icons/bs';
import Bloglist from '../data/blogslist';

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 500) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...Read more" : " Show less"}
            </span>
        </p>
    );
};

export default function Blogs() {
    return (
        <div className="blogs-section">
            {Bloglist.map((blogs) => {
                return (

                    <div className='blog-container'>
                        <div className='blogs-image-wrapper'>
                            <img src={blogs.image} alt='blog' className='blog-img' />
                            <div className='blog-info'>
                                <span className='blog-admin'><CgProfile />&nbsp;{blogs.author}</span> <span className='blog-date'> <BsCalendarWeek /> &nbsp;{blogs.date}</span>
                            </div>
                        </div>
                        <div className='content-wrapper'>
                            <h1 className='blog-h1'>{blogs.title}</h1>
                            <p className='blog-tags'>Tag: {blogs.tags}</p>
                            <p className='blog-content'>
                                <ReadMore>
                                    {blogs.content}
                                </ReadMore>
                            </p>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}