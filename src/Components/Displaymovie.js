import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Displaymovie(props) {

    const [greenflag, setGreenflag] = useState(false);

    const clickHandler = () =>
    {
        for(let obj of props.filteredmovies)
        {
          if(obj["MovieName"] === props.data)
          {
            props.directornameHnadler(obj["Details"].DirectorName);
          }
        }
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
      <Link to={`/movie/${props.id}`}><div className='bg-blue-300 p-5 border' style={{ color: greenflag ? 'green': 'black' }} onClick={clickHandler}>{props.data}</div></Link>
    </div>
  )
}
