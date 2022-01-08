import React, { Component } from 'react';
import '../assets/stylesheets/home.css';

const cardComponent = (link,heading,content) => {
    return (
        <div class="card-component">
            <div className='card-image'>
                <img width={345}  src={link} />
            </div>
            <div className='card-header capitalized'>
                {heading}
            </div>
            <div className='card-content'>
                {content}
            </div>
        </div>
    )
}
class Home extends Component {
    render() {
        return (
            <div className='main'>
                <div className='header spaced'>
                    <div>
                        <img src="http://pec.hosting.acm.org/wp-content/uploads/2020/09/PicsArt_09-05-01.26.03.jpg" height={78} />
                    </div>
                    <div className='italicize header-text'>
                        Advancing Computing as a Science & Profession
                    </div>
                    <div>
                        <div className='uppercased header-small-links'>
                                <div>acm </div>
                                <div>sig</div>
                        </div>
                        <div className='capitalized header-big-links'>
                            <div>log in </div>
                            <div>log out</div>
                            <div>search</div>
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <div className='sub-header spaced'>
                        <div>
                            ABOUT US
                        </div>
                        <div>
                            EVENTS
                        </div>
                        <div>
                            RESOURCES
                        </div>
                        <div>
                            CONTACT US
                        </div>
                        <div>
                            NEWS
                        </div>
                    </div>
                    <div className='banner-content spaced'>
                        <div className='banner-heading-small'>
                            ACM Student Chapter - PEC
                        </div>
                        <div className='banner-heading-large'>PEC ACM</div>
                        <p>
                        A growing community of Computer Science enthusiasts. Our mission is to be the most impactful ACM student chapter
                        </p>
                    </div>
                </div>
                <div className='body spaced'>
                    <div className='cards'>
                        {cardComponent("https://pec.acm.org/wp-content/uploads/2021/03/Software-Hackathon-Poster-327x208.jpeg",
                        'software hackathon',
                        `Registration ends in 48 hours : https://tinyurl.com/pecfest2020 Important
                         dates: Prelims: 5th April 2021, 17:00 Finals: 10th April 2021, 18:00 
                         Rules: 2<= Team Size <=4 humans. Themes for the Software Hackathon […]`)}
                         {cardComponent("https://pec.acm.org/wp-content/uploads/2021/03/unnamed-file-327x208.jpg",
                        'code battle 6',
                        `The best coders of PEC will face off again this weekend to test their mettle. Join in this
                         CB to challenge your skills and improve.Register via the form linked above.Leaderboards […]`)}
                         {cardComponent("https://pec.acm.org/wp-content/uploads/2021/03/cover-327x208.jpg",
                        'international women day 2021',
                        `View this post on Instagram A post shared by PEC ACM Student Chapter (@pecacm)
                         Women in Computing Resources Handbook:`)}
                         {cardComponent("https://pec.acm.org/wp-content/uploads/2021/03/poster-327x208.jpg",
                        'intro to linux workshop',
                        `View this post on Instagram A post shared by PEC ACM Student Chapter (@pecacm)`)}
                        {cardComponent("https://pec.acm.org/wp-content/uploads/2021/03/insta_post-327x208.jpeg",
                        'intro to linux workshop',
                        `View this post on Instagram A post shared by PEC ACM Student Chapter (@pecacm)`)}
                        
                    </div>
                    <div className='sidebar'>
                        <div className='sidebar-comp-one capitalized'>
                            <h3>recent posts</h3>
                            <ul>
                                <li><a>software hackathon</a></li>
                                <li><a>code battle 4</a></li>
                                <li><a>international womans day 2021</a></li>
                                <li><a>intro to linux workshop</a></li>
                                <li><a>projects registration drive</a></li>
                            </ul>
                        </div>
                        <div className='sidebar-comp-two'>
                            <h3>Calendar</h3>
                        </div>
                        <div className='sidebar-comp-three'>
                            <h3>Upcoming Events</h3>
                            <div className='upcoming-events-body'>
                                <i class="calendar times outline icon"></i>
                                <div>
                                    <ul>
                                        There are no upcoming events
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='sidebar-comp-four capitalized'>
                            <h3 className='capitalized'>pages</h3>
                            <ul>
                                <li><a>create post</a></li>
                                <li><a>dashboard</a></li>
                                <li><a>edit my posts</a></li>
                                <li><a>my account</a></li>
                                <li><a>password reset</a></li>
                                <li><a>recruits 2020</a></li>
                                <li><a>user</a></li>
                            </ul>
                        </div>
                        <div className='sidebar-comp-five'>
                            <h3 className='capitalized'>tags</h3>
                            <div className='tags-titles'>
                                <a className='tags-title-type-1'>2020</a>
                                <a className='tags-title-type-2'>codebattle</a>
                                <a className='tags-title-type-1'>coding </a>
                                <a className='tags-title-type-1'>ctf</a>
                                <br></br>
                                <a className='tags-title-type-2'>event</a>
                                <a className='tags-title-type-1'>hackathon</a>
                                <a className='tags-title-type-1'>linux</a>
                                <br></br>
                                <a className='tags-title-type-2'>podcast</a>
                                <a className='tags-title-type-1'>recruitment</a>
                                <br></br>
                                <a className='tags-title-type-2'>talkingtech</a>
                                <a className='tags-title-type-2'>workshop</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer spaced'>
                    <div className='footer-socials'>
                        <i class="linkedin icon"></i>
                        <i class="envelope icon"></i>
                        <i class="twitter icon"></i>
                        <i class="instagram icon"></i>
                        <i class="youtube icon"></i>
                    </div>
                    <div>
                        <div className='acm-custom-logos'>
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/logo.jpeg"></img>
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/n.jpg"></img>
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/pec_logo.jpeg"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;