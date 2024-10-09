import './App.css';

import AuthButtonComponent from "./AuthButtonComponent";
import ProtectedContent from "./ProtectedContent";
import ThemedComponent from "./ThemedComponent";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Dashboard = () => {
    const {theme} = useContext(ThemeContext)

    return(
        <div className={`common ${(theme === 'light') ? 'light-theme' : 'dark-theme'}`}>
            <ThemedComponent/>
            <AuthButtonComponent />
            <ProtectedContent />
        </div>
    )
}

export default Dashboard