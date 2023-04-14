import AuthNav from "components/FormLogIn/AutchNav"
import { Suspense } from "react"

const { Link, NavLink, Outlet } = require("react-router-dom")

const Header =()=>{
    return (
        <div>
           <NavLink to='/'>Home</NavLink>
           <NavLink to={'/register'}>Register</NavLink>
           <NavLink to={"/login"}>Log In</NavLink>
           <AuthNav/>
           <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
           </Suspense>
        </div>
    )
}
export default Header