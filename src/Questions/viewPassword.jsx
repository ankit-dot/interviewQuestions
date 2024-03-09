import React, { useState } from 'react'

function ViewPassword() {

    const [visible, setVisible] = useState(false);
  return (
    <div>
        
        <input type={visible ? "password" : "text"} />
        <button onClick = {() => setVisible(!visible)}>{visible ? `Not View`: `View`} </button>
    </div>
  )
}

export default ViewPassword