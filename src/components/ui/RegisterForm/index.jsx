import { useState, useEffect } from "react"

import TextField from "../../common/Form/TextField/index"
import { validator, validarConfig } from "../../../Utils/validator"
import API from "./../../../API/index"
import SelectField from "../../common/Form/SelectField"
import RadioField from "../../common/Form/RadioField"

const RegisterForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    professions: "",
    sex: "other"
  })
  const [profession, setprofession] = useState([])
  const [errors, setErrors] = useState({})

  const validate = () => {
    const inputErrors = validator(inputData, validarConfig)
    setErrors(inputErrors)
    return Object.keys(inputErrors).length === 0
  }

  useEffect(() => {
    API.professions.fetchAll().then((data) => setprofession(data))
  }, [])

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
      <div className="relative mb-4">
        <SelectField
          data={profession}
          fn={handleChange}
          name={"professions"}
          error={errors.professions}
        />
      </div>
      <RadioField
        value={inputData.sex}
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "Other", value: "other" }
        ]}
        fn={handleChange}
        label="Choose you sex"
        name="sex"
      />
      <button
        className={
          "text-white py-2 px-4 rounded-md w-full " +
          (isValidate ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500")
        }
        type="submit"
        disabled={!isValidate}
      >
        Sign Up
      </button>
    </form>
  )
}

export default RegisterForm
