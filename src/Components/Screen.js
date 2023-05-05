import React,{useState} from 'react'
import Displaymovie from './Displaymovie';

export default function Screen(props) {

    const [displaymoviename, setDisplaymoviename] = useState('');

    const directornameHnadler = (name) =>
    {
        props.setdirectorname(name);
    }

  return (
    <div>
        {console.log(props.filteredmovies)}
        <h1 className='font-bold text-2xl '>Screen</h1>
        <div>
            <div className='bg-blue-300 h-32 text-2xl flex items-center justify-center'>
                Director Name:- {props.directorname}
            </div>
            <div className='flex mt-2 gap-x-2'>
                <div className='w-1/5  h-auto'>
                <h1 className='font-bold text-2xl bg-blue-300'>Movies Name</h1>
                    {props.filteredmovies.map((obj) =>
                    {
                        return (<Displaymovie data={obj["MovieName"]} id={obj["MovieID"]} filteredmovies={props.filteredmovies} setDisplaymoviename={setDisplaymoviename} directornameHnadler={directornameHnadler}></Displaymovie>)
                    })}
                </div>
                <div className='w-3/5 bg-blue-300'>
                    { props.filteredmovies.map((obj) =>
                    {
                        return(obj["MovieName"] === displaymoviename && (<video controls className='w-full'>
                        <source src={obj["Details"].VideoLink} type="video/mp4"/>
                    </video>))})
                    }
                    
                </div>
                <div className='w-1/5 h-auto bg-blue-300'>
                    <h1 className='font-bold text-2xl'>Actors Name</h1>
                {props.filteredmovies.map((obj) =>
                    {
                        return(obj["MovieName"] === displaymoviename && (<div className='text-xl'>{obj["Details"].ActorsNames.map((ob) =>
                        {
                            return(<div>{ob}</div>)
                        })}</div>))
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
