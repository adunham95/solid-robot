import React from 'react'
import Button from '../button/button'
import styles from "./header.module.scss"

interface IHeaderProps{
    newJokeClick: () => void;
}

const Header = ({newJokeClick}: IHeaderProps) => {
    return (
        <div className={styles['header']}>
            <Button onClick={newJokeClick} className={styles['buttonGreen']}>Get A New Random Joke</Button>
            <div>
                <a href='https://github.com/15Dkatz/official_joke_api' className={styles['docs']} target="_blank">View API Docs</a>
            </div>
        </div>
    )
}

export default Header
