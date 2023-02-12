import React , { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();


export function ThemeProvider({children}) {
    let [isDark , setIsDark] = useState(false)
    let theme = isDark? 'dark' : 'light'
    const toggleTheme = () =>{
        localStorage.setItem('isDark',JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(()=>{
        const isDark = localStorage.getItem('isDark') === 'true'
        setIsDark(isDark)
    },[])
  return (
    <ThemeContext.Provider value={[{theme,isDark},toggleTheme]}>{children}</ThemeContext.Provider>
  )
}
