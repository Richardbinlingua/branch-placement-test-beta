import { useState } from 'react'

const GrammarTest = ({ testData, setTestState }) => {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const questions = testData.grammarQuestions ?? []

  // console.log(questions[0].question)

  const questionNumber = questionIndex + 1
  const totalQuestions = questions.length

  const testQuestion = questions[questionIndex]
  const { question, correctAnswer, allAnswers } = testQuestion

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const onAnswerSelected = (correct) => {
    if (correct) {
      setScore(score + 1)
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
      setTestState({ listening: false, grammar: false, end: true })
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Grammar Placement Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <p>
          Question:{' '}
          <span className='text-purple-800'>
            {questionNumber} / {totalQuestions}
          </span>
        </p>
        <h1 className='text-2xl my-6 w-3/4 md:w-1/2 lg:w-1/3'>{question}</h1>

        {allAnswers.map((answer) => (
          // return <button>{answer}</button>
          <li key={answer} className='list-none text-lg'>
            <button
              onClick={onAnswerClick}
              // className='mb-4 w-3/4 md:w-1/2 lg:w-1/3 text-lg cursor-pointer hover:bg-slate-300  text-white bg-[#56a5eb] p-3 rounded-md'
              className='border-2 border-purple-800 p-3 m-2 w-[300px] rounded-md'
            >
              {answer}
            </button>
          </li>
        ))}
        <button
          className='bg-purple-800 text-white rounded-md py-2 px-10 my-5'
          onClick={() =>
            setTestState({ listening: false, grammar: false, end: true })
          }
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default GrammarTest
