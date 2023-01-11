/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import Posts from "./../Posts/index"
import Post from "./../Post/index"
import Layout from "../../Layout"
import Main from "../../Layout/Main"
import Login from "../../Layout/Login"
import UsersList from "../../Layout/Users"
import Registration from '../../Layout/Registration';
import User from '../../Layout/User';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="users" element={<UsersList />} />
        <Route path="users/:slug" element={<User />} />
        <Route path="login" element={<Login />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<h1>Page not exist</h1>} />
      </Route>
    </Routes>
  )
}

export default App
