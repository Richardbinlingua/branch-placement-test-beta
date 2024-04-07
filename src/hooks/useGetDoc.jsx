import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

function useGetDoc(testId) {
  const [testState, setTestState] = useState({
    status: 'loading',
    snapshot: null,
    error: null,
  })

  useEffect(() => {
    async function getTest() {
      setTestState({ status: 'loading', snapshot: null, error: null })
      try {
        const docRef = doc(db, 'branch-tests', testId)
        const docSnap = await getDoc(docRef)
        setTestState({ status: 'success', snapshot: docSnap, error: null })
      } catch (error) {
        console.error(error)
        setTestState({ status: 'error', snapshot: null, error: error })
      }
    }
    getTest()
  }, [testId])

  const { status, snapshot, error } = testState

  let id
  let exists
  let data
  if (snapshot) {
    id = snapshot.id
    exists = snapshot.exists
    data = snapshot.data()
  }

  return { id, exists, data, status, error }
}

export default useGetDoc
