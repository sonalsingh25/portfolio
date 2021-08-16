import React from 'react';
import FooterLink from '../Footer/Footer';
import Header from '../Header/Header';
import { achievementsData } from './../../assets/achievementsData';
import AchievementCard from './AchievementCard';
import './Achievements.css';

const Achievements = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Achievements.'
                details="Here are my few achievements that I am proud of!"
            />

            <div className='project-cards-container'>
                {achievementsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <AchievementCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                
                            />
                        );
                    }
                )}
            </div>

            <FooterLink
                phrase='Check out '
                link='my community work!'
                toAdress='/volunteering'
            />
        </div>
    );
};

export default Achievements;