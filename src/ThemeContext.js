import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider(props) {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme(!darkTheme);
    }

    return (
        <ThemeContext.Provider value={[darkTheme, toggleTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}