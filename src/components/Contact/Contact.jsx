import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import medium from './../../assets/me.png';


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'>
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/sonalsingh25' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/sonalsingh25/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
              
                <a
                    href='https://medium.com/@sonalsingh7573'
                    className='social-icon'
                >
                    <img src={medium} alt='social' />
                </a>
              
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

         
        </div>
    );
};

export default Contact;