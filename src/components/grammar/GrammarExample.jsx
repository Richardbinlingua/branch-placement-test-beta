const GrammarExample = ({ setTestState }) => {
  const onClick = () => {
    setTestState({
      register: false,
      listeningExample: false,
      listening: false,
      grammarExample: false,
      grammar: true,
      end: false,
    })
  }
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1>GrammarExample</h1>
      <button
        onClick={onClick}
        className='bg-[#4054b2] text-white rounded-md py-3 px-20 my-8'
      >
        Start Grammar Test
      </button>
    </div>
  )
}

export default GrammarExample
