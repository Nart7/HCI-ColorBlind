import React from 'react';
import {ReactComponent as Logo} from '../../assets/log.svg'
import styles from './svg.module.scss'

const Rainbo = () => {
  return (
      <div className={styles.container}>
      <Logo />
    </div>
  )
}


export default Rainbo;
