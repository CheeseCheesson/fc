/* eslint-disable */
import { useState, useEffect } from "react"

import TextField from "../../common/Form/TextField/index"
import { validator, validarConfig } from "../../../Utils/validator"
import CheckboxField from "../../common/Form/CheckboxField"

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    stayOn: false
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

  const handleChange = (target) => {
    setInputData((prev) => ({ ...prev, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValidate = validate()
    if (!isValidate) return
  }
  const isValidate = Object.keys(errors).length === 0

  return (
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
        Sign In
      </button>
      <CheckboxField
        name="stayOn"
        fn={handleChange}
        value={inputData.stayOn}
      >
        Stay on this device
      </CheckboxField>
    </form>
  )
}

export default LoginForm
