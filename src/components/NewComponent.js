import React from 'react'
import { useTheme, useThemeUpdate } from '../ThemeContext'

const NewComponent = () => {
   const darkTheme = useTheme()
   const themeStyles = {
    backgroundColor : darkTheme ? '#333' : '#CCC',
    color : darkTheme ? '#CCC' : '#333',
    padding : '2rem',
    margin : '2rem'
   }
    const toggle = useThemeUpdate()
  return (
    <>
    <div style={themeStyles}>

    <div>NewComponent</div>
    <button onClick={toggle} >Toggle</button>
    </div>
    </>
  )
}

export default NewComponent