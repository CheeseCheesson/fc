import { noConflict } from "lodash"
import Select from "react-select"

function MultiSelectField({ options, name, fn }) {
  const optionsArray = !Array.isArray(options)
    ? Object.keys(options).map((key) => ({
        label: options[key].name,
        value: options[key]._id
      }))
    : options

  const handleChange = (value) => {
    fn({ name, value })
  }

  return (
    <label className="block text-gray-700 text-sm font-bold mb-4">
      Choose your qualities
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={optionsArray}
        className="basic-multi-select mt-2"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </label>
  )
}

export default MultiSelectField
