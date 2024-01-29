import React from 'react'
import './noteHome.css'
import NoteHomeImg from "../../assets/homeimg.png"
import Lock from "../../assets/lock.png"

const noteHome = () => {
  return (
    <div className='home-main'>
    <img className='homeimg' src={NoteHomeImg} alt=''/>
    <h1>Pocket Notes</h1>
    <p>Send and receive messages without keeping your phone online.<br/>
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
<div className='footer'>
  <img src={Lock} alt='lock'/>
  <span>end-to-end encrypted</span>
</div>

    </div>
  )
}

export default noteHome