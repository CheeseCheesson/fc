function SearchStatus({ length = 0 }) {
  const getCorrectName = () => {
    if (length === 0) return "Нет кандидатов"
    if (length === 1) return `К встрече с тобой готов ${length} человек`
    if (length > 1 && length < 5) {
      return `К встрече с тобой готовы ${length} человека`
    }
    if (length >= 5) return `К встрече с тобой готовы ${length} человек`
    return null
  }

  const redyTodate = getCorrectName(length)

  return (
    <div className=" text-white text-3xl text-center bg-orange-500 h-10 ">
      {redyTodate}
    </div>
  )
}

export default SearchStatus
