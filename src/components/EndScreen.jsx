const EndScreen = ({ listeningScore, grammarScore }) => {
  return (
    <div>
      <div className='text-center mt-10 text-2xl font-semibold'>
        <h1>Test Complete</h1>
        <h1>Thank you</h1>
      </div>
      <div className='text-center mt-10 text-xl'>
        <h1>
          Your Listening Score:{' '}
          <span className='text-purple-800 font-bold'>
            {listeningScore} / 100
          </span>
        </h1>
        <h1>
          Your Grammar Score:{' '}
          <span className='text-purple-800 font-bold'>{grammarScore} / 50</span>
        </h1>
      </div>
    </div>
  )
}

export default EndScreen
