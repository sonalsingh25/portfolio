import React from 'react'
import FooterLink from '../Footer/Footer'

import Header from '../Header/Header'

import './About.css'

import aboutAnime from './../../assets/about_pic.png.jpg'

const About = () => {
    return(
        <div className = 'section-container'>
            
            <Header  heading = 'About Me.'
            details = 'Programmer | Aspiring Software Developer | Frontend Developer | Open Source Enthusiast' />
            
            
           

            <div className="about-main">
                <div className="about-main-left">
                    {/* Subsection 1 */}
                    <h3 className="about-sub-head">
                        Student
                    </h3>
                   <p className="about-details">
                   Hi, my name is Sonal. I am in my penultimate year at
                    the Cummins College of Engineering for Women! 
                    I am a tech enthusiast, deeply interested in web and web related technologies. 
                   </p>

                    {/* Subsection 2 */}
                    <h3 className="about-sub-head">
                        Open Source Enthusiast
                    </h3>
                   <p className="about-details">
                       I love contributing to open source projects and I started
                        my journey through GirlScript Summer Of Code. 
                        I have contributed to various projects through different contribution programs.
                   </p>
                    {/* Subsection 3 */}
                    <h3 className="about-sub-head">
                        Ledaer
                    </h3>
                   <p className="about-details">
                       I have managed a number of events and led committees at my college. I have worked actively here since my freshman year.
                       </p>
                </div>
                <div className="about-main-right">
                    <img src = {aboutAnime} alt = 'animation' className = 'about-anime' />
                </div>
            </div>

            <FooterLink phrase = 'Checkout my ' link = 'education details!' toAdress = '/education' />

        </div>
    )
}

export default About