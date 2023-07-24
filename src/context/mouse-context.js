/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => { }
})

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState('')

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType,
        cursorChangeHandler
      }}
    >
      {props.children}
    </MouseContext.Provider>
  )
}

export default MouseContextProvider
