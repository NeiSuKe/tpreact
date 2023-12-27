import React, { FC } from 'react';
import './About.css';

interface AboutProps {
  // Propriétés spécifiques à About
}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <h2>À propos</h2>
      <p>Les auteurs de ce TP sont VANHAELST William et LETOUZE Julien.</p>
    </div>
  );
};


export default About;
