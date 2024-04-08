import useGetDoc from '../hooks/useGetDoc'
import ListeningTest from './ListeningTest'

const ListeningTestContainer = ({
  setTestState,
  listeningScore,
  setListeningScore,
}) => {
  const test = useGetDoc('v1H8NC177RRhUaOZHCE6')
  // console.log(test)

  let contents
  if (test.status === 'loading') {
    contents = <p>Loading...</p>
  } else if (test.status === 'error') {
    contents = <p>Error. Please try again</p>
  } else if (!test.exists) {
    contents = <p>No quiz found</p>
  } else {
    contents = (
      <ListeningTest
        testData={test.data}
        setTestState={setTestState}
        listeningScore={listeningScore}
        setListeningScore={setListeningScore}
      />
    )
  }

  return <div>{contents}</div>
}

export default ListeningTestContainer
