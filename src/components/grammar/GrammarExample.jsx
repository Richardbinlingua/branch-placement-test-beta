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
    <>
      <div className='flex flex-col justify-center items-center text-center'>
        <h2 className='text-3xl my-5 text-center'>Grammar Test</h2>

        <p className='text-lg font-semibold'>
          Look at the example below. The correct answer is selected.
        </p>
        <h1 className='text-2xl my-4 w-[330px] md:w-1/2 lg:w-1/3'>
          In warm climates people ______ sitting outside in the sun.
        </h1>
        <button
          className='border-2 border-[#4054b2] p-3 m-1 w-[200px] rounded-md'
          disabled
        >
          likes
        </button>
        <button
          className='border-2 border-[#4054b2] p-3 m-1 w-[200px] rounded-md bg-blue-400'
          disabled
        >
          like
        </button>
        <button
          className='border-2 border-[#4054b2] p-3 m-1 w-[200px] rounded-md'
          disabled
        >
          are liking
        </button>

        <button
          onClick={onClick}
          className='bg-[#4054b2] text-white rounded-md py-2 w-[300px] my-6'
        >
          Start Grammar Test
        </button>
      </div>
    </>
  )
}

export default GrammarExample
