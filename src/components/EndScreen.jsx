import { useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const EndScreen = ({ listeningScore, grammarScore, student, setStudent }) => {
  const { firstName, lastName, branch } = student

  async function addStudent(student) {
    try {
      const docRef = await addDoc(collection(db, 'branch-database'), student)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    addStudent({
      firstName: firstName,
      lastName: lastName,
      branch: branch,
      listeningScore: listeningScore,
      grammarScore: grammarScore,
    })
  }, [])

  console.log(student)

  return (
    <div>
      <div className='text-center mt-10 text-2xl font-semibold'>
        <h1>Test Complete</h1>
        <h1>Thank you</h1>
      </div>
      <div className='text-center mt-10 text-xl'>
        <h1>
          Your Listening Score:{' '}
          <span className='text-[#4054b2] font-bold'>
            {listeningScore} / 100
          </span>
        </h1>
        <h1>
          Your Grammar Score:{' '}
          <span className='text-[#4054b2] font-bold'>{grammarScore} / 50</span>
        </h1>
      </div>
    </div>
  )
}

export default EndScreen
