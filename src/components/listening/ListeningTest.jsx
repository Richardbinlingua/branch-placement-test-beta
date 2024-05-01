import { useState, useRef, useEffect } from 'react'

const ListeningTest = ({
  testData,
  setTestState,
  listeningScore,
  setListeningScore,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const [submit, setSubmit] = useState(false)

  const questions = testData.listeningQuestions ?? []

  // console.log(questions[5].correctAnswer)
  // console.log(testData.listeningQuestions)

  const questionNumber = questionIndex + 1
  const totalQuestions = questions.length

  const testQuestion = questions[questionIndex]
  const { question, correctAnswer, allAnswers } = testQuestion

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  // const [showListenButton, setShowListenButton] = useState(true)

  const soundtrack = useRef(new Audio('/listening.mp3'))

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
      listening: false,
      grammarExample: true,
      grammar: false,
      end: false,
    })
  }

  // const play = () => {
  //   // console.log('play')
  //   audio.play()
  //   setIsClicked(true)
  // }

  // const pause = () => {
  //   // console.log('pause')
  //   audio.pause()
  // }

  // const handleClick = (e, index) => {
  //   console.log(index)
  //   // console.log(e)
  //   // console.log(questions[index].correctAnswer)
  //   if (e === questions[index].correctAnswer) {
  //     setScore(score + 1)
  //   }
  // }

  const onAnswerSelected = (correct) => {
    if (correct) {
      setListeningScore(listeningScore + 1)
    }
  }

  const onAnswerClick = (event) => {
    const userAnswer = event.target.innerHTML
    setSelectedAnswer(userAnswer)
    const correct = userAnswer === correctAnswer
    onAnswerSelected(correct)
    nextQuestion()
  }

  const nextQuestion = () => {
    if (questionIndex >= totalQuestions - 1) {
      // soundtrack.current.pause()

      // setTestState({ grammarExample: true })
      setSubmit(true)
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  // console.log(listeningScore)

  // if (submit)
  //   return (
  //     <>
  //       <h2 className='text-3xl my-5 text-center'>Listening Test</h2>
  //       <div className='flex flex-col justify-center items-center text-center'>
  //         <button
  //           onClick={stop}
  //           className='bg-[#4054b2] text-white rounded-md py-2 my-8 w-[300px]'
  //         >
  //           Submit
  //         </button>
  //       </div>
  //     </>
  //   )

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Listening Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        {/* <button
          // onClick={play}
          onClick={() => setIsPlaying(true)}
          className='bg-[#4054b2] text-white rounded-md py-3 px-28 my-5'
          disabled={isClicked}
        >
          Play
        </button> */}

        <p className='text-lg mt-3 mb-5'>
          Question:{' '}
          <span className='text-[#4054b2] font-semibold'>
            {questionNumber} / {totalQuestions}
          </span>
        </p>
        <div className='flex'>
          {allAnswers.map((answer) => (
            // return <button>{answer}</button>
            <li key={answer} className='list-none text-lg'>
              <button
                onClick={onAnswerClick}
                // className='mb-4 w-3/4 md:w-1/2 lg:w-1/3 text-lg cursor-pointer hover:bg-slate-300  text-white bg-[#56a5eb] p-3 rounded-md'
                className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md'
              >
                {answer}
              </button>
            </li>
          ))}
        </div>
        {/* <button
          className='bg-[#4054b2] text-white rounded-md py-2 my-8 w-[300px]'
          // onClick={() => {
          //   pause()
          //   setTestState({ listening: false, grammar: true, end: false })
          // }}
          onClick={stop}
        >
          Submit
        </button> */}
        {submit && (
          <button
            onClick={stop}
            className='bg-[#4054b2] text-white rounded-md py-2 my-8 w-[300px]'
          >
            Submit
          </button>
        )}
      </div>
    </>
  )
}

export default ListeningTest
