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
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1>ListeningExample</h1>
      <button
        onClick={onClick}
        className='bg-[#4054b2] text-white rounded-md py-3 px-20 my-8'
      >
        Start Listening Test
      </button>
    </div>
  )
}

export default ListeningExample
