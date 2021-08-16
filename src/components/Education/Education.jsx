import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import { educationData } from './../../assets/educationData';
import EducationCard from './EducationCard';
import './Education.css';

const Education = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Education'
                details="These are the schools I have went to!"
            />

            <div className='project-cards-container'>
                {educationData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <EducationCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my experience!'
                toAdress='/experience'
            />
        </div>
    );
};

export default Education;