import GrammarExample from '../grammar/GrammarExample'

const ListeningExample = ({ setTestState }) => {
  const onClick = () => {
    setTestState({
      register: false,
      listeningExample: false,
      listening: true,
      grammarExample: false,
      grammar: false,
      end: false,
    })
  }

  const play = () => {}

  return (
    <>
      <h2 className='text-3xl my-5 text-center'>Listening Placement Test</h2>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='text-lg font-bold'>
          Look at the example below. Listen. You will hear the example{' '}
          <i>once</i> only.
        </p>
        <p className='text-lg font-bold'>
          Decide which word you hear, "soap" or "soup"
        </p>
        <p className='text-lg font-bold'>The correct answer has been clicked</p>
        <button
          onClick={play}
          className='bg-[#4054b2] text-white rounded-md py-3 mt-8 mb-1 w-[150px]'
        >
          Play Example
        </button>
        <div className='flex mt-5'>
          <button
            className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md'
            disabled
          >
            soap
          </button>
          <button
            className='border-2 border-[#4054b2] p-3 m-2 w-[150px] rounded-md bg-blue-400'
            disabled
          >
            soup
          </button>
        </div>
        <button
          onClick={onClick}
          className='bg-[#4054b2] text-white rounded-md py-3 my-12 w-[325px]'
        >
          Start Listening Test
        </button>
      </div>
    </>
  )
}

export default ListeningExample
