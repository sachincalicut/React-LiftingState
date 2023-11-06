import React from 'react'

export default function Child(props) {
  return (
    <div className='child'>
      <h3>Child</h3>
      <button onClick={() => props.changeWord('Sachin Chanduveetil')}> Change the Title</button>
    </div>
  )
}
