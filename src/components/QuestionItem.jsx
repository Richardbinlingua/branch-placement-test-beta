import { useState } from 'react'

const QuestionItem = ({
  question,
  correctAnswer,
  allAnswers,
  onAnswerSelected,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const onAnswerClick = (event) => {
    const userAnswer = event.target.innerHTML
    setSelectedAnswer(userAnswer)
    const correct = userAnswer === correctAnswer
    onAnswerSelected(correct)
  }
  // console.log(allAnswers)

  return (
    <div className='flex space-between mt-5 align-middle'>
      {question}

      {allAnswers.map((answer) => (
        <li key={answer} className='list-none'>
          <button
            onClick={onAnswerClick}
            className='bg-blue-200 mx-2 py-2 px-2 rounded-md'
          >
            {answer}
          </button>
        </li>
      ))}
    </div>
  )
}

export default QuestionItem
