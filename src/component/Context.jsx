import { createContext, useState } from "react";

export const Context = createContext();


export const ThemeProvider = ({ children}) => {
    const [theme , setTheme] = useState('light')


    const toggleMenu = () => {
        setTheme(theme === 'light' ? 'dark': 'light')
     }
     return (
        <Context.Provider value={{ theme, toggleMenu}}>
            {children}
        </Context.Provider>
     )
}



