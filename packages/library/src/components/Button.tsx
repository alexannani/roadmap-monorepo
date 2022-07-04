import { FC } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    text: string
}

const Button: FC<IButtonProps> = ({text}) => 
    <div className={styles.buttonContainer}>
        <button className={styles.buttonStyle}>{text}</button>
    </div>
export default Button;