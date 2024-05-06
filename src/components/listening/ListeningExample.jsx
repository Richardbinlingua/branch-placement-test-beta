import { useRef, useEffect, useState } from 'react'

const ListeningExample = ({ setTestState }) => {
  // const onClick = () => {
  //   setTestState({
  //     register: false,
  //     listeningExample: false,
  //     listening: true,
  //     grammarExample: false,
  //     grammar: false,
  //     end: false,
  //   })
  // }

  const [isClicked, setIsClicked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const soundtrack = useRef(new Audio('/listeningExample.mp3'))

  useEffect(() => {
    if (isPlaying) {
      soundtrack.current.play()
      setIsClicked(true)
    } else {
      soundtrack.current.pause()
    }
  }, [isPlaying])

  const stop = () => {
    soundtrack.current.pause()
    setTestState({
      register: false,
      listeningExample: false,
      listening: true,
      grammarExample: false,
      grammar: false,
      end: false,
    })
  }

  return (
    <>
      <h2 className='text-3xl my-7 text-center'>Listening Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-lg font-semibold'>
          Listen to the audio. Look at the example on the screen. You will hear
          the example <i>once</i> only.
        </p>
        <p className='text-lg font-semibold'>
          Decide which word you hear, "soap" or "soup"
        </p>

        <div className='flex my-5'>
          <button
            className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md'
            disabled
          >
            soap
          </button>
          <button
            className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md bg-blue-400'
            disabled
          >
            soup
          </button>
        </div>
        <p className='text-lg font-semibold'>
          The correct answer was 'soup', so 'soup' should be selected.
        </p>
        <button
          onClick={stop}
          className='bg-[#4054b2] text-white rounded-md py-2 my-12 w-[300px]'
        >
          Start Test
        </button>
      </div>
    </>
  )
}

export default ListeningExample
