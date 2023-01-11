/* eslint-disable consistent-return */
function Qualitie({ qualities = {} }) {
  function setBgcolorToRole(key) {
    switch (key) {
      case "success":
        return "bg-emerald-500"
      case "dark":
        return "bg-slate-500"
      case "primary":
        return "bg-cyan-500"
      case "secondary":
        return "bg-orange-500"
      case "info":
        return "bg-indigo-500"
      case "danger":
        return "bg-red-500"
      default:
        break
    }
  }
  return (
    <div className="flex">
      {Object.values(qualities).map((qual) => (
        <span
          className={`${setBgcolorToRole(
            qual.color
          )} rounded-lg px-3 font-medium text-white p-1 mr-1`}
          key={qual._id}
        >
          {qual.name}
        </span>
      ))}
    </div>
  )
}

export default Qualitie
