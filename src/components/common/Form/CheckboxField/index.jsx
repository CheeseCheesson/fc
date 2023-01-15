const CheckboxField = ({ value, name, fn, children, error = "" }) => {
  const handleChange = () => {
    fn({ name, value: !value })
  }
  return (
    <>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600"
          name={name}
          checked={value}
          onChange={handleChange}
          value={value}
        />
        <span className="ml-2 text-gray-700">{children}</span>
      </label>
      {error && <span className="text-red-500">{error}</span>}
    </>
  )
}

export default CheckboxField
