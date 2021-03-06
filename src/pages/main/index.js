import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './main.module.scss';

// Landing Page Component
const Main = () => {
  const navigate = useNavigate();
  
  // Switch Route Function 
  const pushRoute = () => {
    navigate('/color-blind')
  }

  return <div className={styles.mainContainer}>
    
      <div className={styles.headerContainer}>
        <div className={styles.head}>
          <h1 className={styles.headline}>Color Blind</h1>
        </div>

        <h2 className={styles.about}>
        “Design elements and techniques that improve color accessibility for color blind users are generally considered to be good design practices.While you might think that your website’s aesthetic appeal might suffer if you design for accessibility, that’s certainly not the case.”
        </h2>
      <button className={styles.startButton} onClick={pushRoute} >Test Color Blindness</button>
      </div>
      
  </div>;
};


export default Main;
