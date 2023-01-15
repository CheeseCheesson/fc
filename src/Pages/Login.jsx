import { Link } from "react-router-dom"

import LoginForm from "../components/ui/LoginForm"

const Login = () => {
  return (
    <div className="bg-white p-6 rounded-lg w-1/2 mx-auto mt-12">
      <h3 className="text-center text-2xl font-bold">Login</h3>
      <LoginForm />
      <p>
        Don&apos;t have account? <Link to={"/registration"}>Sign Up</Link>
      </p>
    </div>
  )
}

export default Login
