/* eslint-disable */
function Pagination(props) {
  const active =
    "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
  const notActive =
    "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

  const arr = []
  const countPage = Math.ceil((props.itemCount + 1) / props.pageSize)
  if (countPage === 1) return null
  for (let i = 1; i < countPage; i++) {
    arr[i] = i // Creating an array of size 4 and filled of 1
  }
  const prev = (
    <li>
      <button
        href="/"
        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={
          props.currentPage > 1
            ? (e) => props.onPageChange(e, props.currentPage - 1)
            : null
        }
      >
        <span className="sr-only">Previous</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </li>
  )
  const pages = arr.map((item) => (
    <li key={item}>
      <button
        href="/"
        className={item === props.currentPage ? active : notActive}
        onClick={(e) => props.onPageChange(e, item)}
      >
        {item}
      </button>
    </li>
  ))

  const next = (
    <li>
      <button
        href="/"
        className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={
          props.currentPage < countPage - 1
            ? (e) => props.onPageChange(e, props.currentPage + 1)
            : null
        }
      >
        <span className="sr-only">Next</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </li>
  )

  return (
    <div className="text-center pt-5 pb-5">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          {prev}
          {pages}
          {next}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
