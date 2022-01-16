import React, { Component } from 'react';
import '../assets/stylesheets/home.css';

const cardComponent = (link,heading,content) => {
    return (
        <div class="card-component">
            <div className='card-image'>
                <img width={345}  src={link} alt='cardimg' />
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
                        <img src="http://pec.hosting.acm.org/wp-content/uploads/2020/09/PicsArt_09-05-01.26.03.jpg" height={78} alt='' />
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
                            <div className='header-big-links-one'>log in </div>
                            <div className='header-big-links-two'>log out</div>
                            <div style={{display:"flex"}} className='header-big-links-three'>
                                <i  class="search icon"></i>
                                search
                            </div>
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
                                <li><a href='/'>software hackathon</a></li>
                                <li><a href='/'>code battle 4</a></li>
                                <li><a href='/'>international womans day 2021</a></li>
                                <li><a href='/'>intro to linux workshop</a></li>
                                <li><a href='/'>projects registration drive</a></li>
                            </ul>
                        </div>
                        <div className='sidebar-comp-two'>
                            <h3>Calendar</h3>
                            <table>
                                <caption>January 2022</caption>
                                <thead>
                                    <tr>
                                        <th>M</th>
                                        <th>T</th>
                                        <th>W</th>
                                        <th>T</th>
                                        <th>F</th>
                                        <th>S</th>
                                        <th>S</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>1</td>
                                        <td>2</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        
                                        
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>31</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <a href="/" style={{fontSize:"1.25em"}}>« Mar </a> 
                            </div>
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
                                <li><a href='/'>create post</a></li>
                                <li><a href='/'>dashboard</a></li>
                                <li><a href='/'>edit my posts</a></li>
                                <li><a href='/'>my account</a></li>
                                <li><a href='/'>password reset</a></li>
                                <li><a href='/'>recruits 2020</a></li>
                                <li><a href='/'>user</a></li>
                            </ul>
                        </div>
                        <div className='sidebar-comp-five'>
                            <h3 className='capitalized'>tags</h3>
                            <div className='tags-titles'>
                                <a className='tags-title-type-1' href='/'>2020</a>
                                <a className='tags-title-type-2' href='/'>codebattle</a>
                                <a className='tags-title-type-1' href='/'>coding </a>
                                <a className='tags-title-type-1' href='/'>ctf</a>
                                <br></br>
                                <a className='tags-title-type-2' href='/'>event</a>
                                <a className='tags-title-type-1' href='/'>hackathon</a>
                                <a className='tags-title-type-1' href='/'>linux</a>
                                <br></br>
                                <a className='tags-title-type-2' href='/'>podcast</a>
                                <a className='tags-title-type-1' href='/'>recruitment</a>
                                <br></br>
                                <a className='tags-title-type-2' href='/'>talkingtech</a>
                                <a className='tags-title-type-2' href='/'>workshop</a>
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
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/logo.jpeg" alt=''></img>
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/n.jpg" alt=''></img>
                            <img src="https://pec.acm.org/wp-content/uploads/2020/09/pec_logo.jpeg" alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
