import { useState } from 'react'
import Register from './components/Register'
import ListeningTestContainer from './components/ListeningTestContainer'
import GrammarTestContainer from './components/GrammarTestContainer'
import Header from './components/Header'
import EndScreen from './components/EndScreen'

function App() {
  const [testState, setTestState] = useState({
    register: true,
    listening: false,
    grammar: false,
    end: false,
  })

  const [listeningScore, setListeningScore] = useState(0)
  const [grammarScore, setGrammarScore] = useState(0)

  let pageContent

  if (testState.register) pageContent = <Register setTestState={setTestState} />

  if (testState.listening)
    pageContent = (
      <ListeningTestContainer
        setTestState={setTestState}
        listeningScore={listeningScore}
        setListeningScore={setListeningScore}
      />
    )
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
      <EndScreen listeningScore={listeningScore} grammarScore={grammarScore} />
    )

  return (
    <>
      <Header />
      <div>{pageContent}</div>
    </>
  )
}

export default App
