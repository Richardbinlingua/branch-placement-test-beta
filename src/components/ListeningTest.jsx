import { useState } from 'react'
import Listening from './Listening'

const ListeningTest = ({ testData, setTestState }) => {
  const [score, setScore] = useState(0)
  const questions = testData.listeningQuestions ?? []

  // console.log(questions[5].correctAnswer)
  // console.log(testData.listeningQuestions)

  const handleClick = (e, index) => {
    console.log(index)
    // console.log(e)
    // console.log(questions[index].correctAnswer)
    // event.target.style.backgroundColor = '#6B21A8'
    if (e === questions[index].correctAnswer) {
      setScore(score + 1)
    }
  }

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Listening Placement Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <Listening />

        {questions.map((item, index) => (
          <div key={index}>
            {item.question}
            {item.allAnswers.map((answer) => (
              <button
                className='m-2 border-2 border-purple-800 px-3 py-2 w-[150px] rounded-md'
                key={answer}
                // onClick={(e) => console.log(e.target.innerHTML)}
                // onClick={() => console.log(index)}
                onClick={(e) => handleClick(e.target.innerHTML, index)}
              >
                {answer}
              </button>
            ))}
          </div>
        ))}
        <button
          className='bg-purple-800 text-white rounded-md py-2 px-10 my-5'
          onClick={() =>
            setTestState({ listening: false, grammar: true, end: false })
          }
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default ListeningTest
