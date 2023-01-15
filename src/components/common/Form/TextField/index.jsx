import { useState } from "react"

const TextField = (props) => {
  const { label, type, name, value, placeholder, fn, error } = props
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    fn({ name: target.name, value: target.value })
  }

  const handleClick = () => {
    setShowPassword((prev) => !prev)
  }
  const checkType = (valueType) => {
    switch (valueType) {
      case "email":
        return "email"
      case "password":
        return showPassword ? "text" : "password"
      default:
        return "text"
    }
  }
  return (
    <div className="form-group mb-4 relative">
      <label className="block text-gray-700 font-medium mb-2" htmlFor={name}>
        {label}:
      </label>
      <input
        autoComplete="nope"
        type={checkType(type)}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="form-input w-full py-2 px-3 text-gray-700 leading-tight rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-0 top-0 py-2 px-3 bg-transparent text-indigo-500 rounded-r-lg"
          onClick={handleClick}
        >
          {showPassword ? "Hide password" : "Show password"}
        </button>
      )}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  )
}

export default TextField
