import React, { Component } from 'react';
import '../assets/stylesheets/About-Us-body.css';
class Home extends Component {
    render() {
        return (

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
                        <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tv-Ym6RdUjUFOBM3NTf_Tid2nXwVNBD2qA&usqp=CAU" alt="helicopter"/>
                    </div>

                    <div className='textbox2'>
                        <img className="img2" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8&w=1000&q=80" alt="coding"/>
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
                        <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW8vR7QBm7e_Vw2N_PlFlfHBd4u-eQ5BR7Q&usqp=CAU" alt="coding"/>
                    </div>

                    
                </div>
            )
    }
}

export default Home;