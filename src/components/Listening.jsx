import { useState } from 'react'

const Listening = () => {
  const [isClicked, setIsClicked] = useState(false)
  let audio = new Audio('/listening.mp3')
  const play = () => {
    audio.play()
    setIsClicked(true)
  }
  return (
    <>
      <button
        onClick={play}
        disabled={isClicked}
        className='bg-purple-800 text-white rounded-md py-2 px-20 my-5'
      >
        Start Listening
      </button>
    </>
  )
}

export default Listening
