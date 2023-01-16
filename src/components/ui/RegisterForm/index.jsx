import { useState, useEffect } from "react"

import TextField from "../../common/Form/TextField/index"
import { validator, validarConfig } from "../../../Utils/validator"
import API from "./../../../API/index"
import SelectField from "../../common/Form/SelectField"
import RadioField from "../../common/Form/RadioField"
import MultiSelect from "../../common/Form/MultiSelectField/index"
import CheckboxField from "../../common/Form/CheckboxField"

const RegisterForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    professions: "",
    sex: "other",
    qualities: [],
    licence: false
  })
  const [profession, setprofession] = useState([])
  const [qualities, setQualities] = useState({})
  const [errors, setErrors] = useState({})

  const validate = () => {
    const inputErrors = validator(inputData, validarConfig)
    setErrors(inputErrors)
    return Object.keys(inputErrors).length === 0
  }

  useEffect(() => {
    API.professions.fetchAll().then((data) => setprofession(data))
    API.qualities.fetchAll().then((data) => setQualities(data))
  }, [])

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
      <div className="relative mb-4">
        <SelectField
          data={profession}
          fn={handleChange}
          name={"professions"}
          error={errors.professions}
          defaultValue={inputData.qualities}
        />
      </div>
      <div className="mb-4"></div>
      <MultiSelect options={qualities} fn={handleChange} name="qualities" />
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
      <div className="my-4">
        <CheckboxField
          name="licence"
          fn={handleChange}
          value={inputData.licence}
          error={errors.licence}
        >
          I agree to the processing of my personal information
        </CheckboxField>
      </div>
    </form>
  )
}

export default RegisterForm
