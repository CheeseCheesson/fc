/* eslint-disable */
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import API from "../API"
import Qualitie from "../components/ui/Qualitie"
import Rating from "../components/ui/Rating"

const User = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    API.users.getByUserName(slug).then((data) => setUser(data))
  }, [])

  return (
    <>
      <p>One user id {slug}</p>
      {user && (
        <>
          <h1>{user.name}</h1>
          Профессия: {user.profession.name}
          <Qualitie qualities={user.qualities} />
          <div>Completing meetings {user.completedMeetings}</div>
          <Rating rating={user.rate} />
        </>
      )}
      <div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
          onClick={() => navigate("/users", { replace: true })}
        >
          Все пользователи
        </button>
      </div>
    </>
  )
}

export default User
