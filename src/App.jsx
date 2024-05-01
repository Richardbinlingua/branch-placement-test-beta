import { useState } from 'react'
import Register from './components/Register'
import ListeningTestContainer from './components/listening/ListeningTestContainer'
import GrammarTestContainer from './components/grammar/GrammarTestContainer'
import Header from './components/Header'
import EndScreen from './components/EndScreen'
import ListeningExample from './components/listening/ListeningExample'
import GrammarExample from './components/grammar/GrammarExample'

function App() {
  const [testState, setTestState] = useState({
    register: true,
    listeningExample: false,
    listening: false,
    grammarExample: false,
    grammar: false,
    end: false,
  })

  const [listeningScore, setListeningScore] = useState(0)
  const [grammarScore, setGrammarScore] = useState(0)

  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    branch: '',
    listeningScore: '',
    grammarScore: '',
  })

  let pageContent

  if (testState.register)
    pageContent = (
      <Register
        setTestState={setTestState}
        student={student}
        setStudent={setStudent}
      />
    )

  if (testState.listeningExample)
    pageContent = <ListeningExample setTestState={setTestState} />

  if (testState.listening)
    pageContent = (
      <ListeningTestContainer
        setTestState={setTestState}
        listeningScore={listeningScore}
        setListeningScore={setListeningScore}
      />
    )

  if (testState.grammarExample)
    pageContent = <GrammarExample setTestState={setTestState} />

  if (testState.grammar)
    pageContent = (
      <GrammarTestContainer
        setTestState={setTestState}
        grammarScore={grammarScore}
        setGrammarScore={setGrammarScore}
      />
    )
  if (testState.end)
    pageContent = (
      <EndScreen
        listeningScore={listeningScore}
        grammarScore={grammarScore}
        student={student}
        setStudent={setStudent}
      />
    )

  return (
    <>
      <Header />
      <div className='mx-4'>{pageContent}</div>
    </>
  )
}

export default App
