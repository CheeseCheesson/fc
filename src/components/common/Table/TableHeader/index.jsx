/* eslint-disable */
function TableHeader({ onSort, selectedSort, columns = {} }) {
  const handleSort = (items) => {
    if (selectedSort.path === items) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "desc" ? "asc" : "desc"
      })
    } else {
      onSort({ path: items, order: "desc" })
    }
  }
  const arrowDirection = (col, selected) => {

    if (col.path) {
      if (selected.order === "asc") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-1 inline-flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        )
      } else {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-1 inline-flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )
      }
    }
  }

  return (
    <thead className="bg-emerald-100">
      <tr>
        {Object.keys(columns).map((col) => (
          <th
            key={col}
            onClick={
              columns[col].path
                ? () => handleSort(columns[col].path)
                : undefined
            }
            className="p-3 text-sm font-semibold tracking-white text-left"
            {...{ role: columns[col].path && "button" }}
          >
            {columns[col].name}
            {arrowDirection(columns[col], selectedSort)}
          </th>
        ))}
        <th> </th>
      </tr>
    </thead>
  )
}

export default TableHeader
