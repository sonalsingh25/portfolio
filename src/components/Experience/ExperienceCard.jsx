import React from 'react';
import './Experience.css';

const ExperienceCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
            
            </div>
        </div>
    );
};

export default ExperienceCard;