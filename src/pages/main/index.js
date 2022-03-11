import React, { useState } from 'react';
import TransitionArray from '../../components/Rainbo/index';
import Rainbo from '../../components/Rainbo';
import {ReactComponent as rainboSvg} from '../../assets/log.svg'

import styles from './main.module.scss';


const Main = () => {

  return <div className={styles.mainContainer}>
    
      <div className={styles.headerContainer}>
        <div className={styles.head}>
          <TransitionArray />
          <h1 className={styles.headline}>HCI quiz</h1>
        </div>

        <h2 className={styles.about}>
          “Welcome to the HCI quiz! This quiz aims to develop your interaction with
          your computer through your environmental factors. You will be asked 10
          multiple choice questions about your environment, where we then mark you
          from a score out of 100. The better the score, the more comfortable you are
          behind your computer! To improve your comfort levels, simply read the
          improvements we give you as you progress through the quiz.”
        </h2>

      <rainboSvg />
      <img className={{}} src={rainboSvg} />

        <button className={styles.startButton} >Start quiz</button>
      </div>
      
  </div>;
};


export default Main;
