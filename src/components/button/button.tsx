import React from 'react'
import styles from "./button.module.scss"

interface IButtonProps{
    onClick: () => void;
    className?: string;
    children: React.ReactNode
}

const Button = ({onClick, className = '', children}: IButtonProps) => {
    return (
        <button onClick={onClick} className={`${styles['button']} ${className}`}>
            {children}
        </button>
    )
}

export default Button
