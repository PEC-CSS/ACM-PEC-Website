// import React, { Component } from 'react';

// class Home extends Component {
//     render() {
//         return (
//                 <div><h2>Body</h2></div>
//             )
//     }
// }

// export default Home;

import React, { Component } from 'react';
import { useState } from 'react';
import '../assets/stylesheets/About-Us-body.css';
const Home = () => {
    const [body, setBody] = useState('eb') // "eb" or "ib"
    return (
        <>
            <div className='Body1'>
                <div className='heading'>
                    <p className='mission'>Our Mission :</p>
                    <p className='statement' >To Be The Most Impactful ACM Student Chapter.</p>
                    <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                </div>
                <div className='textbox1'>
                    <div>
                        <p className='heading1'>History of PEC</p>
                        <p className='text1'>Punjab Engineering College is a public research & technical institution in Chandigarh. It was founded in 1921 in Lahore, established in Chandigarh in 1953, and focuses on the field of applied sciences, particularly engineering and technology. It is known for its two-year and four-year programmes for which the entry is through the Joint Entrance Examination – Mains and Graduate Aptitude Test in Engineering. It offers degrees such as Bachelor of Technology, Master of Technology, and a few others. It also has a comprehensive graduate program offering doctoral degrees in Science, Technology, Engineering and Mathematics</p>
                    </div>
                    <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tv-Ym6RdUjUFOBM3NTf_Tid2nXwVNBD2qA&usqp=CAU" alt="acm" />
                </div>

                <div className='textbox2'>
                    <img className="img2" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80" alt='acm' />
                    <div>
                        <p className='heading2'>History of ACM</p>
                        <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula nunc, consequat id odio sed, efficitur eleifend ex. Maecenas quis interdum urna. In tempus elit vulputate semper condimentum. Morbi tincidunt tellus vel condimentum sollicitudin. Morbi consectetur libero ac odio sagittis, et ullamcorper libero egestas. Quisque nisl purus, sagittis et sapien sit amet, ultricies laoreet neque. Curabitur fermentum ac sapien eu finibus. Sed eget molestie lectus. Nunc rutrum est in velit convallis consequat. Sed at massa ex. Phasellus scelerisque aliquam odio, non venenatis purus pretium sed. Aenean vulputate aliquet ipsum id auctor. In hendrerit nibh ipsum, quis commodo velit vehicula non. Sed interdum lectus urna, id molestie lectus vulputate eget. Morbi consectetur, massa sed mollis venenatis, quam dolor gravida felis, vitae rutrum est magna egestas libero.</p>
                    </div>
                </div>

                <div className='textbox3'>
                    <div>
                        <p className='heading3'>PEC ACM's Field Of Interest</p>
                        <p className='text3'>Maecenas non urna sed ante interdum faucibus eu eu sem. Nam vitae erat consequat, pretium quam vitae, commodo ex. Donec pulvinar rhoncus dolor quis malesuada. Etiam imperdiet in magna non facilisis. Aenean rutrum, orci et pretium porttitor, ligula enim volutpat sapien, nec facilisis tortor erat in lectus. Praesent viverra diam eget dolor scelerisque posuere. Ut eget lectus quis ex efficitur auctor. Donec erat ligula, blandit non tristique et, condimentum vehicula urna. Sed egestas blandit turpis fermentum volutpat. In euismod nisl consectetur odio porta accumsan. Aenean ac mauris nisl. Mauris elementum sollicitudin suscipit. Donec feugiat urna sed ex pellentesque, et vulputate dolor mattis. Sed sodales mi est, nec pulvinar elit congue non.</p>

                    </div>
                    <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW8vR7QBm7e_Vw2N_PlFlfHBd4u-eQ5BR7Q&usqp=CAU" alt='acm' />
                </div>
            </div>
            <div className='Body2'>
                <div className="box1">
                    OUR EXECUTIVE BOARD
                </div>
                <div className="box2">
                    <div className="left">
                        <img className='img4' src="data:image/jpeg;base64,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" alt='acm'></img>
                    </div>
                    <div className="right">
                        <div className='heading4'>
                            <p>PEC ACM Secretary</p>
                        </div>
                        <div className='text4'>
                            <p>Nishant Puri</p>
                            <p>Incoming SDE at Microsoft</p>
                            <p>Former intern at Gurugram Cyber Police</p>
                        </div>
                    </div>
                </div>
                {/* <div className="box3">
                        <img className='img5' src="https://images.unsplash.com/photo-1645021790494-182818c51e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"  />
                        <img className='img6' src='https://images.unsplash.com/photo-1641595171033-eef6fda5e040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
                        <img className='img7' src="https://images.unsplash.com/photo-1645022576935-fc012945f8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                        <img className='img8' src="https://images.unsplash.com/photo-1644952720775-c769200e6b67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    </div> */}
                <div className="box3">
                    <div className="smallbox">
                        <button className='btn1' onClick={() => setBody("eb")}>EXECUTIVE BODY</button>
                        <button className='btn1' onClick={() => setBody("ib")}>IMPLEMENTATION BODY</button>

                        {body === 'eb' ? <div>
                            {/* eb */}
                            <div className='ebs'>
                                <div className="col1">
                                    <ul className='item'>
                                        <li>Geetika Bansal</li>
                                        <li>Parikh Goyal</li>
                                        <li>Ankit Goyal</li>
                                        <li>Gaurav Sharma</li>
                                    </ul>
                                </div>
                                <div className="col1">
                                    <ul className='item'>
                                        <li>Geetika Bansal</li>
                                        <li>Parikh Goyal</li>
                                        <li>Ankit Goyal</li>
                                        <li>Gaurav Sharma</li>
                                    </ul>
                                </div>
                            </div>
                        </div> : 
                        // <div>
                        //     {/* ib  */}
                        //     <div>
                        //         IMPLEMENTATION
                        //     </div>
                        // </div>
                        <div>
                            {/* ib */}
                            <div className='ebs'>
                                <div className="col1">
                                    <ul className='item'>
                                        <li>Saiyam Gupta</li>
                                        <li>Lakshya Garg</li>
                                        <li>Kanisha Kaur</li>
                                        <li>Kanika Kaur</li>
                                    </ul>
                                </div>
                                <div className="col1">
                                    <ul className='item'>
                                        <li>Kriti Mahajan</li>
                                        <li>Kavya Rakheja</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;