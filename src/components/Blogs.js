import { useEffect, useState } from 'react';
import '../utils/stylesheets/blogs.css';
import { CgProfile } from 'react-icons/cg';
import { BsCalendarWeek } from 'react-icons/bs';
import sanityClient from "../sanity/client";

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
    const [blogList, setBlogList] = useState([]);

    useEffect(()=> {
        const query = `*[_type=='blog'] {
            _id,
            title,
            tags,
            mainImage{
                    asset->{
                    _id,
                    url
                  }
                },
            description,
            author,
            publishedAt,
        }`;
        sanityClient
            .fetch(query)
            .then((data) => setBlogList(data))
            .catch((err) => console.log(err.message));
    })
    return (
        <div className="blogs-section">
            {blogList.map((blogs) => {
                return (

                    <div className='blog-container'>
                        <div className='blogs-image-wrapper'>
                            <img src={blogs.image} alt='blog' className='blog-img' />
                            <div className='blog-info'>
                                <span className='blog-admin'><CgProfile />&nbsp;{blogs.author}</span> <span className='blog-date'> <BsCalendarWeek /> &nbsp;{new Date(blogs.publishedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className='content-wrapper'>
                            <h1 className='blog-h1'>{blogs.title}</h1>
                            <p className='blog-tags'>Tag: {blogs.tags.join(", ")}</p>
                            <p className='blog-content'>
                                <ReadMore>
                                    {blogs.description}
                                </ReadMore>
                            </p>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}