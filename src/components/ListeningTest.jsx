import { useState } from 'react'

const ListeningTest = ({
  testData,
  setTestState,
  listeningScore,
  setListeningScore,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const questions = testData.listeningQuestions ?? []

  // console.log(questions[5].correctAnswer)
  // console.log(testData.listeningQuestions)

  const questionNumber = questionIndex + 1
  const totalQuestions = questions.length

  const testQuestion = questions[questionIndex]
  const { question, correctAnswer, allAnswers } = testQuestion

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showListenButton, setShowListenButton] = useState(true)

  let audio = new Audio('/listening.mp3')

  const play = () => {
    // console.log('play')
    audio.play()
    setIsClicked(true)
  }

  const pause = () => {
    // console.log('pause')
    audio.pause()
  }

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
      setTestState({ listening: true, grammar: false, end: false })
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  // console.log(listeningScore)

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Listening Placement Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <button
          onClick={play}
          className='bg-blue-400 text-white rounded-md py-3 px-28 my-5'
          disabled={isClicked}
        >
          Start Listening
        </button>
        <p className='text-lg mb-3'>
          Question:{' '}
          <span className='text-purple-800 font-semibold'>
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
                className='border-2 border-purple-800 p-3 m-2 w-[150px] rounded-md'
              >
                {answer}
              </button>
            </li>
          ))}
        </div>
        <button
          className='bg-purple-800 text-white rounded-md py-3 px-10 my-8'
          onClick={() => {
            setTestState({ listening: false, grammar: true, end: false })
            pause()
          }}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default ListeningTest
