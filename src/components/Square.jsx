import React from 'react'

function Square({value, onClick}) {
  return (
    <div onClick={onClick} className='square'>
        <h4>{value}</h4>
    </div>
  )
}

export default Square