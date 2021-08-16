import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import { volunteerData } from './../../assets/volunteerData';
import VolunteerCard from './VolunteerCard';
import './Volunteering.css';

const Volunteering = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Community Work.'
                details="Here are the communities I am working for!"
            />

            <div className='project-cards-container'>
                {volunteerData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <VolunteerCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                           
                                imageUrl={imageUrl}
                                
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    );
};

export default Volunteering;