import React, { FC } from 'react';
import styles from './button.module.css';

interface IButtonProps {
    text: string
}

const Button: FC<IButtonProps> = ({text}) => 

    <button className={styles.buttonContainer}>{text}</button>;

export default Button;