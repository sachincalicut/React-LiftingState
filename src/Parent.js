import React, {useState} from 'react'
import Child from './Child'
export default function Parent() {
const [word, setWord] = useState('Parent')

  return (
    <div className='parent'>
      <h2>{word}</h2>
      <Child changeWord={word => {setWord(word)}}/>
    </div>
  )
}
