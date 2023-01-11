function SearchInput({ fn }) {
  return (
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        id="search"
        type="search"
        className="form-input py-2 pl-10 pr-4 rounded-md leading-5 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 placeholder-gray-500"
        placeholder="Search"
        onChange={({ target }) => fn(target)}
      />
    </div>
  )
}

export default SearchInput
