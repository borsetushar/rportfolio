import {createContext, useContext, useReducer, useEffect, Children} from 'react'
import themeReducer from './themereducer';

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) =>{
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) =>{
        dispatchTheme({type:buttonClassName})
    }

   //save theme settings to local storage
   useEffect(()=>{
    localStorage.setItem('themeSettings', JSON.stringify(themeState));
   })

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

//custome hook to use our theme  context wherever we want in our project
export const  useThemeContext = () =>{
    return useContext(ThemeContext)
}