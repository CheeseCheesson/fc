import { Link } from "react-router-dom"
import RegisterForm from "../components/ui/RegisterForm"

const Registration = () => {
  return (
    <div className="bg-white p-6 rounded-lg w-1/2 mx-auto mt-12">
      <h3 className="text-center text-2xl font-bold">Registration</h3>
      <RegisterForm />
      <p>
        Alredy have account? <Link to={"/login"}>Sign In</Link>
      </p>
    </div>
  )
}

export default Registration
