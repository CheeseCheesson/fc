import Bookmark from "../Bookmark"
import Qualitie from "../Qualitie"
import Rating from "../Rating"

function UserCard({ user, ...props }) {
  return (
    <div key={user._id} className="bg-sky-200 p-4 space-y-2 rounded-lg shadow">
      <div className="flex items-center text-sm flex-wrap">
        <div className="flex flex-wrap">
          <div className="flex content-start">Name</div>
          <div className="p-3 text-sm">{user.name}</div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex content-start">Qualities</div>
          <div className="p-3 text-sm text-gray-700 whitespace-nowrap flex flex-wrap gap-2 justify-start">
            <Qualitie qualities={user.qualities} />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex content-start">Profession</div>
          <div className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {user.profession.name}
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex content-start">Met once</div>
          <div className="p-3 text-sm">{user.completedMeetings}</div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex content-start">Rating</div>
          <div className="p-3 text-sm">
            <Rating rating={user.rate} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <Bookmark
            onClick={() => props.setFavorite(user._id)}
            checked={user.bookmark}
          />
        </div>
        <div className="flex flex-shrink-0">
          <button
            type="button"
            disabled={user.bookmark}
            onClick={() => props.onDelete(user._id)}
            className={`py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md ${
              user.bookmark ? "bg-slate-700" : "hover:bg-red-700"
            }  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
