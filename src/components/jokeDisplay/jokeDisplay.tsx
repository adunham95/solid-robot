import React, { useState } from 'react'
import { IJoke } from '../../App'
import Button from '../button/button'
import styles from "./jokeDisplay.module.scss"

interface IJokeDisplayProps{
    joke: IJoke
}

const JokeDisplay = ({joke}: IJokeDisplayProps) => {
    const [showPunchLine, setShowPunchLine] = useState(false)

    return (
        <div>
            <p className={`${styles['setup']} ${styles['jokeItem']}`}>{joke.setup}</p>
            <div className={styles['buttonContainer']}>
            <Button onClick={() => setShowPunchLine(!showPunchLine)} className={styles['buttonBlue']}>{showPunchLine ? "Hide" : "Show"} Punchline</Button>
            </div>
            {showPunchLine && <p className={`${styles['punchline']} ${styles['jokeItem']}`}>{joke.punchline}</p>}
        </div>
    )
}

export default JokeDisplay
