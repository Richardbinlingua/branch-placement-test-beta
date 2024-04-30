import useGetDoc from '../../hooks/useGetDoc'
import GrammarTest from './GrammarTest'

const GrammarTestContainer = ({
  setTestState,
  grammarScore,
  setGrammarScore,
}) => {
  const test = useGetDoc('5qEDmzWOr4szjcezKpYV')
  // console.log(test)

  let contents
  if (test.status === 'loading') {
    contents = <p className='text-center mt-10'>Loading...</p>
  } else if (test.status === 'error') {
    contents = <p className='text-center mt-10'>Error. Please try again</p>
  } else if (!test.exists) {
    contents = <p className='text-center mt-10'>No quiz found</p>
  } else {
    contents = (
      <GrammarTest
        testData={test.data}
        setTestState={setTestState}
        grammarScore={grammarScore}
        setGrammarScore={setGrammarScore}
      />
    )
  }

  return <div>{contents}</div>
}

export default GrammarTestContainer
