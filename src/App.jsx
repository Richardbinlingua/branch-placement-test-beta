import { useState } from 'react'
import ListeningTestContainer from './components/ListeningTestContainer'
import GrammarTestContainer from './components/GrammarTestContainer'
import Header from './components/Header'
import EndScreen from './components/EndScreen'

function App() {
  const [testState, setTestState] = useState({
    listening: true,
    grammar: false,
    end: false,
  })

  let pageContent

  if (testState.listening)
    pageContent = <ListeningTestContainer setTestState={setTestState} />
  if (testState.grammar)
    pageContent = <GrammarTestContainer setTestState={setTestState} />
  if (testState.end) pageContent = <EndScreen />

  return (
    <>
      <Header />
      <div>{pageContent}</div>
    </>
  )
}

export default App
