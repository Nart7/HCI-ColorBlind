import React from 'react'
import styles from "./colorBlind.module.scss";
import defaultImg from '../../assets/default.jpeg';
import redGreenImg from '../../assets/red-green.jpeg';
import tritonamalyImg from '../../assets/tritonamaly.jpeg';
import tritanopiaImg from '../../assets/tritanopia.jpeg';
import {useNavigate} from 'react-router-dom'

// Color Blind Page 
const ColorBlind = () => {
    const [blindImage, setBlindImage] = React.useState(defaultImg);
    const navigate = new useNavigate();
    
    // All btn function that will change the image
    const redGreenBtn = () => { setBlindImage(redGreenImg) };
    const tritonamalyBtn = () => { setBlindImage(tritonamalyImg) };
    const tritanopiaBtn = () => { setBlindImage(tritanopiaImg) };
    const resetBtn = () => { setBlindImage(defaultImg) };

    // Navigate To back Route
    const goBack = () => navigate('/');


    return (
        <div className={styles.container}>
            <div className={styles.goBack} onClick={goBack}>{'< '} Back</div>
            <h1>Preview Image</h1>
            <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <img src={blindImage} alt="Default"/>
            <div className={styles.buttonSection}>
                <button onClick={redGreenBtn} >Red-Green</button>
                <button onClick={tritonamalyBtn}>Tritonamaly</button>
                <button onClick={tritanopiaBtn}>Tritanopia</button>
                <button onClick={resetBtn} className={styles.finishBtn}>Reset</button>
            </div>

        </div>

    )
}

export default ColorBlind