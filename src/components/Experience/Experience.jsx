import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import { experienceData } from './../../assets/experienceData';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

const Experience = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Experiences.'
                details="Here are a few organizations I have interned with!"
            />

            <div className='project-cards-container'>
                {experienceData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ExperienceCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                                
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my projects!'
                toAdress='/projects'
            />
        </div>
    );
};

export default Experience;