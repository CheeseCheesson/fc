/* eslint-disable */
import { useState, useEffect } from "react"
import _ from "lodash"
import GroupList from "../GroupList"
import Pagination from "../Pagination"
import SearchStatus from "../SearchStatus"
import UserCard from "../UserCard/Index"
import API from "../../API"
import { paginate } from "../../Utils/paginate"
import UserTable from "../UserTable"
import styles from "./Users.module.scss"
import SearchInput from "../SearchInput"

function Users() {
  const [users, setUsers] = useState()
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data))
  }, [])
  const handleSetFavorite = (id) => {
    const newUsers = [...users].map((el) =>
      el._id === id ? { ...el, bookmark: !el.bookmark } : el
    )
    localStorage.setItem("users", JSON.stringify(newUsers))
    setUsers(newUsers)
  }
  function handleDelete(id) {
    const findNewUsers = [...users].find((el) => el._id === id)
    if (findNewUsers.bookmark) return

    const newUsers = [...users].filter((el) => el._id !== id)
    localStorage.setItem("users", JSON.stringify(newUsers))
    setUsers(newUsers)
  }
  const pageSize = 6
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: "name", order: "desc" })
  const [searchValue, setSearchValue] = useState("")
  useEffect(() => {
    API.professions.fetchAll().then((data) =>
      setProfessions({
        ...data,
        allProfessions: {
          name: "Все профессии"
        }
      })
    )
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [professions, searchValue])
  const handlePageChange = (e, pageIndex) => {
    e.preventDefault()
    setCurrentPage(pageIndex)
  }
  useEffect(() => {
    setSearchValue("")
    setCurrentPage(1)
  }, [selectedProf])
  // choose profession item
  const handleProfessionSelect = (params) => {   
    if (searchValue) {
      setSearchValue("")
      console.log('searchValue',searchValue);
    }
    setSelectedProf(params)
  }
  //sort
  const handleSort = (params) => {
    setSortBy(params)
  }
  //search
  const handleChange = (target) => {
    setSelectedProf(undefined)
    setSearchValue(target.value)
  }
  if (users) {
    const filtredUsers = searchValue
      ? users.filter(user =>  user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
      : selectedProf && selectedProf["_id"]
      ? users.filter((user) => {
          return (
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
          )
        })
      : users
    const count = filtredUsers.length
    const sortedUsers = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order])
    const cropUser = paginate(sortedUsers, currentPage, pageSize)

    return (
      <div className={styles.parant}>
        <SearchStatus length={users.length} />
        <div>
          <SearchInput searchValue={searchValue} fn={handleChange} />
          <div className="flex self-start mt-12">
            {professions && (
              <GroupList
                professions={professions}
                onSelect={handleProfessionSelect}
                selectField={selectedProf}
              />
            )}
            {count > 0 && (
              <>
                <div className="grow-[3] overflow-auto rounded-lg shadow hidden md:block">
                  <UserTable
                    users={cropUser}
                    onSort={handleSort}
                    selectedSort={sortBy}
                    onDelete={handleDelete}
                    setFavorite={handleSetFavorite}
                  />
                </div>
                <div className="flex flex-wrap gap-4 md:hidden">
                  {count > 0 &&
                    cropUser.map((item) => (
                      <UserCard key={item._id} user={item} />
                    ))}
                </div>
              </>
            )}
          </div>
          <Pagination
            currentPage={currentPage}
            itemCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    )
  } else {
    return (
      <div role="status" className="text-center">
        <svg
          aria-hidden="true"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
}

export default Users
