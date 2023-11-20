import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const initialTheme = 'light'
const spaBackground = document.getElementById('root')

const htmlDocument = {
    html: document.getElementById('htmlId')
}


const path = location.href

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(initialTheme)

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('theme'))
        setTheme(storedTheme)
    }, [path])

    useEffect(() => {
        if(theme === 'light'){
            htmlDocument.html.setAttribute('data-bs-theme', 'light')
        } else {
            htmlDocument.html.setAttribute('data-bs-theme', 'dark')
        }
    }, [theme])

    const handleTheme = () => {
        (theme === 'light') ? setTheme('dark') : setTheme(initialTheme);
        ((theme === 'light') ? spaBackground.style.background = 'linear-gradient(to bottom right, #F85E00, #232323, #121212)' : spaBackground.style.background = 'linear-gradient(to bottom right, #f5f5f5, #444444)');

        const resourceLinks = document.getElementsByClassName('resourceLink')
        if(theme === 'light'){
            for(let i = 0; i < resourceLinks.length; i++){
                resourceLinks[i].style.color = '#F5F5F5'
            }
        } else {
            for(let i = 0; i < resourceLinks.length; i++){
                resourceLinks[i].style.color = '#222'
            }
        }
    }

    window.localStorage.setItem('theme', JSON.stringify(theme));

    const data = {theme, handleTheme, path}

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
export default ThemeContext