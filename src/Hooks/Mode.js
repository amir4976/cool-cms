import React, { useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/Theme'
import { useContext } from 'react'
import { dark } from '@mui/material/styles/createPalette'
import { color } from '@mui/system'
export default function Mode() {
    let [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
    let [mode, setMode] = useState('')
    let [color, setColor] = useState('')
    useEffect(() => {
        if (isDark) {
            setMode("rgb(30,30,45)")
            setColor('#fff')
        } else {
            setMode("#fff")
            setColor("#000")
        }

    }, [theme])

return [mode,color]
}
