/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import styles from "./index.module.css"
function GroupList(props) {
  const {
    professions,
    onSelect,
    contentProperty = "name",
    selectField
  } = props
  
  const data = Array.isArray(professions) ? professions.map((item) => (
    <li
      key={uuidv4()}
      className={
        selectField === item
          ? `${styles['item-list']} font-bold bg-rose-200 px-3 py-2 text-slate-700 rounded-lg hover:bg-indigo-200 ease-in-out duration-300`
          : styles['item-list']
      }
      onClick={() => onSelect(item)}
      role="button"
    >
      {item[contentProperty]}
    </li>
  )) : professions && Object.keys(professions).map((item) => (
    <li
      key={uuidv4()}
      className={
        selectField === professions[item]
          ? `${styles['item-list']} font-bold bg-rose-200  px-3 py-2 text-slate-700 rounded-lg hover:bg-indigo-200 ease-in-out duration-300`
          : styles['item-list']
      }
      onClick={() => onSelect(professions[item])}
      role="button"
    >
      {professions[item][contentProperty]} 
    </li>
  ))
  return (
    <nav className="flex flex-col justify-center self-start min-w-[15%] pr-2.5 truncate">
      <ul className="list-none">
        {data}
      </ul>
    </nav>
  )
}

export default GroupList
