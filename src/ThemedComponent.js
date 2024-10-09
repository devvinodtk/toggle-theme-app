import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

const ThemedComponent = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <div>
            <p> The current theme is <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}

export default ThemedComponent;
