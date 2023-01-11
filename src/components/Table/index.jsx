/* eslint-disable */
import TableHeader from "./../TableHeader/index"
import TableBody from "./../TableBody/index"

const Table = ({ onSort, selectedSort, columns, users, children }) => {
  return (
    <table className="w-full">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ columns, data: users }} />
        </>
      )}
    </table>
  )
}

export default Table
