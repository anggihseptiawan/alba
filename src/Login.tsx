import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({ status: false, input: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const onSubmit = async () => {
    if (input.email === '') {
      setError({
        status: true,
        input: 'email',
        message: 'Email tidak boleh kosong!'
      })
      return
    }

    if (input.password === '') {
      setError({
        status: true,
        input: 'password',
        message: 'Password tidak boleh kosong!'
      })
      return
    }

    const isValidEmail = EMAIL_PATTERN.test(input.email)
    if (!isValidEmail) {
      setError({
        status: true,
        input: 'password',
        message: 'Email tidak valid!'
      })
      return
    }

    try {
      setIsLoading(true)
      const submit = await fetch('https://reqres.in/api/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(input)
      })

      const responseData = await submit.json()
      return navigate('/profile', { state: responseData.token })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      setError({ status: false, input: '', message: '' })
    }
  }

  return (
    <div className="flex h-screen justify-center items-center px-4">
      <div className="w-full sm:w-1/2 md:w-1/3 mx-auto">
        <h1 className="text-center mb-10">LOGIN TO YOUR ACCOUNT</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded-md     mt-2 border border-yellow-400"
            placeholder="email"
            id="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          {error.status && error.input === 'email' && (
            <small className="text-red-500">{error.message}</small>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-md     mt-2 border border-yellow-400"
            placeholder="password"
            id="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {error.status && error.input === 'password' && (
            <small className="text-red-500">{error.message}</small>
          )}
        </div>

        <button
          className="block w-full py-2 rounded-md bg-yellow-400 hover:bg-yellow-500"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Wait..' : 'Login'}
        </button>
      </div>
    </div>
  )
}

export default Login
