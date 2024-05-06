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

  const onAnswerSelected = (correct) => {
    if (correct) {
      setListeningScore(listeningScore + 1)
    }
  }

  const onAnswerClick = (event) => {
    const userAnswer = event.target.innerHTML
    setSelectedAnswer(userAnswer)
    event.target.disabled = true
    const correct = userAnswer === correctAnswer
    onAnswerSelected(correct)
    nextQuestion()
  }

  const nextQuestion = () => {
    if (questionIndex >= totalQuestions - 1) {
      setSubmit(true)
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Listening Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-lg mt-3 mb-5'>
          Question:{' '}
          <span className='text-[#4054b2] font-semibold'>
            {questionNumber} / {totalQuestions}
          </span>
        </p>
        <div className='flex'>
          {allAnswers.map((answer) => (
            <li key={answer} className='list-none text-lg'>
              <button
                onClick={onAnswerClick}
                className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md'
              >
                {answer}
              </button>
            </li>
          ))}
        </div>

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
