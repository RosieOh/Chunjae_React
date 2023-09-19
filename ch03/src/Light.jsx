import React from 'react'

const Light = ( { room, on, toggle } ) => { //room : 장소, on:true/false, toggle:이벤트 핸들러
    console.log({ room, on })
  return (
    <button onClick={toggle}>
        {room} {on ? "🙆‍♂️" : "💁‍♂️"}
    </button>
  )
}

export default Light