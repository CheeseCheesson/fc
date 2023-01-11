import { NavLink, useMatch } from "react-router-dom"

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to)

  const changeColorActiveLink = (isActive) => isActive ? "text-red-500 hover:text-red-800" : "text-blue-500 hover:text-blue-800"
  return (
    <NavLink to={to} className={() => changeColorActiveLink(match)} {...props}>
      {children}
    </NavLink>
  )
}

export default CustomLink
