import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const ProtectedContent = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? (
        <>
            <h2>Welcome, you're logged in!</h2>
            <p>This is sensitive content only for authenticated users.</p>
        </>
    ):(
        <h2>Please log in to view this content.</h2>
    );
}

export default ProtectedContent;