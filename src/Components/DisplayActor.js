import React, { useState } from 'react'

export default function DisplayActor(props) {

    const [actorlink, setActorlink] = useState('');

    const clickHandler = () =>
    {
        for (let obj of props.actordetails)
        {
            if (obj.ActorName === props.data)
            {
                setActorlink(obj.Link);
            }
        }
    }

  return (
    <div>
          <a href={actorlink} target="_blank" rel="noreferrer"><div onClick={clickHandler}>{props.data}</div></a>
    </div>
  )
}
