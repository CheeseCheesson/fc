/* eslint-disable */
import { Route, Routes } from "react-router-dom"
import Posts from "./../common/Posts"
import Post from "./../common/Post"
import Layout from "../../Pages"
import Main from "../../Pages/Main"
import Login from "../../Pages/Login"
import UsersList from "../../Pages/Users"
import Registration from '../../Pages/Registration';
import User from '../../Pages/User';

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
