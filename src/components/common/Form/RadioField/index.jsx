const RadioField = ({
  fn = () => {},
  options,
  name,
  value,
  label = "Choose your sex..."
}) => {
  const handleChange = ({ target }) => {
    fn({ name: target.name, value: target.value })
  }
  return (
    <>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="flex flex-row gap-2 mb-2">
        {options.map((sex) => (
          <div
            key={sex.name + "_" + sex.value}
            className="flex items-center"
          >
            <label className="flex items-center text-gray-700 gap-2">
              <input
                type="radio"
                name={name}
                value={sex.value}
                onChange={handleChange}
                checked={sex.value === value}
                className="form-radio h-5 w-5 text-gray-600"
              />
              {sex.name}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default RadioField
