import { useState } from 'react'
import styles from "./app.module.scss"
import Header from './components/header/header'
import JokeDisplay from './components/jokeDisplay/jokeDisplay'


export interface IJoke{
  id: number,
  type: string,
  setup: string,
  punchline: string
}

function App() {
  const [loadingState, setLoadingState] = useState<"loading" | "error" | "loaded">("loaded")
  const [joke, setJoke] = useState<null | IJoke>()

  function fetchJokes(){
    setLoadingState("loading")
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => {
        setLoadingState('loaded')
        setJoke(data)
      })
      .catch((error) => {
        setLoadingState('error')
      });
  }

  function generateSection(){
    switch (loadingState) {
      case "loading":
        return <p className={styles['loading']}>Loading your joke...</p>
      case "error":
        return <p className={styles['error']}>There was an error loading your joke</p>
      case "loaded":
        return joke ? <JokeDisplay joke={joke} /> : null
      default:
        return null
    }
  }


  return (
    <div className={styles['container']}>
      <Header newJokeClick={fetchJokes}/>
      {generateSection()}
    </div>
  )
}

export default App
