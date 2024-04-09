import { useState } from 'react'

const Register = ({ setTestState }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [branch, setBranch] = useState('')

  const startTest = (e) => {
    e.preventDefault()
    setTestState({
      register: false,
      listening: true,
      grammar: false,
      end: false,
    })
  }

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-10 mb-8'>
        inlingua Placement Test
      </h1>
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
              className='border border-gray-400 rounded-sm mb-4 pl-2 py-[1px] text-md'
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
              className='border border-gray-400 rounded-sm mb-4 pl-2 text-md py-[1px]'
            />
          </label>
          <label className='block m-2'>
            <span className='block font-semibold text-left mb-1 text-md'>
              Branch
            </span>
            <select
              className='border border-gray-400 rounded-sm mb-4 pl-2 w-full text-lg'
              onChange={(e) => setBranch(e.target.value)}
              required
            >
              <option value=''>select branch</option>
              <option value='Bangna'>Bangna</option>
              <option value='Esplanade'>Esplanade</option>
              <option value='Fashion'>Fashion Island</option>
              <option value='Future'>Future Park</option>
            </select>
          </label>
          <div className='text-center'>
            <button className='border rounded-md px-8 py-2 bg-[#4054b2] text-white mt-6'>
              Start Test
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
