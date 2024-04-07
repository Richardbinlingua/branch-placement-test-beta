import useGetDoc from '../hooks/useGetDoc'
import GrammarTest from './GrammarTest'

const GrammarTestContainer = ({ setTestState }) => {
  const test = useGetDoc('lbbPfbHdl93AZ3CFlagT')
  // console.log(test)

  let contents
  if (test.status === 'loading') {
    contents = <p>Loading...</p>
  } else if (test.status === 'error') {
    contents = <p>Error. Please try again</p>
  } else if (!test.exists) {
    contents = <p>No quiz found</p>
  } else {
    contents = <GrammarTest testData={test.data} setTestState={setTestState} />
  }

  return <div>{contents}</div>
}

export default GrammarTestContainer
