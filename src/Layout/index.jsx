import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
  return (
    <div className="bg-slate-100 p-7  max-w-screen-2xl mx-auto">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout
