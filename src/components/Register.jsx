import { useState } from 'react'

const Register = ({ setTestState }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [branch, setBranch] = useState('')

  const startTest = (e) => {
    e.preventDefault()
    setTestState({
      register: false,
      listeningExample: true,
      listening: false,
      grammarExample: false,
      grammar: false,
      end: false,
    })
  }

  return (
    <div>
      <h1 className='text-3xl my-5 text-center'>inlingua Placement Test</h1>
      <div className='flex justify-center'>
        <form onSubmit={startTest}>
          <label className='block m-2'>
            <span className='block font-semibold text-left mb-1 text-md'>
              First name
            </span>
            <input
              required
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className='border border-gray-400 rounded-sm mb-4 pl-2 py-[1px] text-md w-[300px]'
            />
          </label>
          <label className='block m-2'>
            <span className='block font-semibold text-left mb-1 text-md'>
              Last Name
            </span>
            <input
              required
              type='text'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className='border border-gray-400 rounded-sm mb-4 pl-2 text-md py-[1px] w-[300px]'
            />
          </label>
          <label className='block m-2'>
            <span className='block font-semibold text-left mb-1 text-md'>
              Branch
            </span>
            <select
              className='border border-gray-400 rounded-sm mb-4 pl-2 text-lg w-[300px]'
              onChange={(e) => setBranch(e.target.value)}
              required
            >
              <option value=''>select branch</option>
              <option value='Bangkae'>Bangkae</option>
              <option value='Bangna'>Bangna</option>
              <option value='Chaengwattana'>Chaengwattana</option>
              <option value='Esplanade'>Esplanade</option>
              <option value='Fashion Island'>Fashion Island</option>
              <option value='Future Park'>Future Park</option>
              <option value='Hat Yai'>Hat Yai</option>
              <option value='Korat'>Korat</option>
              <option value='Pinklao'>Pinklao</option>
              <option value='Rama 2'>Rama 2</option>
              <option value='Rama 3'>Rama 3</option>
              <option value='Seacon Square'>Seacon Square</option>
              <option value='Siam Paragon'>Siam Paragon</option>
              <option value='Udon Thani'>Udon Thani</option>
              <option value='West Gate'>West Gate</option>
            </select>
          </label>
          <div className='text-center'>
            <button className='border rounded-md px-8 py-2 bg-[#4054b2] text-white mt-6 w-[300px]'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
