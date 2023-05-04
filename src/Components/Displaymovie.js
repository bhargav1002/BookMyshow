import React, { useEffect, useState } from 'react'

export default function Displaymovie(props) {

    const [greenflag, setGreenflag] = useState(false);

    const clickHandler = () =>
    {
        props.setDisplaymoviename(props.data);
    }

    useEffect(()=>
    {
        setGreenflag(false);
        for(let obj of props.filteredmovies)
        {
            if (obj["MovieName"] === props.data)
            {
                if(obj["Details"].ActorsNames.includes(obj["Details"].DirectorName))
                {
                    setGreenflag(true);
                }
            }
        }
    },[props.data,props.filteredmovies])

  return (
    <div>
      <div className='bg-blue-300 p-5 border' style={{color:greenflag ? 'green' : 'black'}} onClick={clickHandler}>{props.data}</div>
    </div>
  )
}
