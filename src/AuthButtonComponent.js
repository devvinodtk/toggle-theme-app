import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

const AuthButtonComponent = () => {
    const {isAuthenticated, login, logout} = useContext(AuthContext);

    return(
        <div>
            <h1>Authentication Example</h1>
            <button disabled={isAuthenticated} onClick={login}>Login</button>
            <button disabled={!isAuthenticated} onClick={logout}>Logout</button>
        </div>
    )
}

export default AuthButtonComponent;