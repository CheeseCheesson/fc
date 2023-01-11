/* eslint-disable */
import _ from "lodash"

function TableBody({ data, columns }) {
  const renderData = (item, colmn) => {
    if (columns[colmn].component) {
      const comp = columns[colmn].component
      if (typeof comp === "function") {
        return comp(item)
      }
      return comp
    }
    return _.get(item, columns[colmn].path)
  }

  return (
    <tbody className="devide-y devide-gray-100">
      {data.map((item, index) => (
        <tr
          key={item._id}
          className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}
        >
          {Object.keys(columns).map((column) => (
            <td
              key={column}
              className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold"
            >
              {renderData(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody

/* <tr className={index % 2 ? "bg-indigo-50" : "bg-slate-50"}>
<td className="p-3 text-gray-700 whitespace-nowrap text-base font-semibold">
  {user.name}
</td>
</tr> */
