import React, { useContext } from 'react'
import './DotRing.scss'
import useMousePosition from '../useMousePosition'
import { MouseContext } from '../../context/mouse-context'

const DotRing = () => {
  // 1.
  const { cursorType } = useContext(MouseContext)

  const { x, y } = useMousePosition()
  return (
    <>
      {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'ring ' + cursorType}
      ></div>
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  )
}

export default DotRing
