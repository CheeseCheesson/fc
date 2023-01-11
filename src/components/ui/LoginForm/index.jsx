import { useState, useEffect } from "react"

import TextField from "../../common/Form/TextField/index"
import { validator, validarConfig } from "../../../Utils/validator"

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const inputErrors = validator(inputData, validarConfig)
    setErrors(inputErrors)
    return Object.keys(inputErrors).length === 0
  }

  useEffect(() => {
    validate()
    return () => {
      setErrors({})
    }
  }, [inputData])

  const handleChange = ({ target }) => {
    setInputData((prev) => ({ ...prev, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValidate = validate()
    if (!isValidate) return
  }
  const isValidate = Object.keys(errors).length === 0

  return (
    <div className="bg-white p-6 rounded-lg w-1/2 mx-auto mt-12">
      <h3 className="text-center text-2xl font-bold">Login</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label={"Email"}
          type="email"
          name="email"
          value={inputData.email}
          placeholder="example@email.com"
          fn={handleChange}
          error={errors.email}
        />
        <TextField
          label={"Password"}
          type="password"
          name="password"
          value={inputData.password}
          placeholder="********"
          fn={handleChange}
          error={errors.password}
        />
        <button
          className={
            "text-white py-2 px-4 rounded-md w-full " +
            (isValidate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500")
          }
          type="submit"
          disabled={!isValidate}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
