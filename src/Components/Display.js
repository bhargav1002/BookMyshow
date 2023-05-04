import React, { useEffect, useState } from "react";
import axios  from 'axios';
import Screen from "./Screen";

export default function Display() {

    const [moviedata, setMoviedata] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [moviename, setMoviename] = useState([]);
    const [actordata, setActordata] = useState([]);
    const [filteredmovies, setFilteredmovies] = useState([]);
    const [directorname, setdirectorname] = useState('');
    const [mname, setmname] = useState('');

    useEffect(()=>
    {
        const f = async () =>
        {
            const response = await axios.get('MovieDetail.json');
            setMoviedata(response.data);
        }
        const f1 = async () =>
        {
            const response = await axios.get('Filter.json');
            setDirectors(response.data["Directors"]);
            setMoviename(response.data["Movies"]);
            setActordata(response.data["Actors"]);
        }   
        f()
        f1()
    },[])

    const directorHandler = (e) =>
    {
        setFilteredmovies([]);
        setdirectorname("");
        setmname('');
        if (e.target.value !== "please select")
        {
            setdirectorname(e.target.value);
            for(let obj of moviedata)
            {
                if(obj["Details"].DirectorName === e.target.value)
                {
                    setFilteredmovies((ob) => [...ob,obj]);
                    console.log(obj);
                }
            }
        }
        else{
            setdirectorname("");
            setmname('');
        }
    }

    const movieHandler = (e)=>
    {
        setFilteredmovies([]);
        setdirectorname("");
        setmname('');
        if (e.target.value !== "please select")
        {
            setmname(e.target.value);
            for(let obj of moviedata)
            {
                if(obj["MovieName"] === e.target.value)
                {
                    setdirectorname(obj["Details"].DirectorName)
                    setFilteredmovies((ob) => [...ob,obj]);
                }
            }
        }
        else{
            setdirectorname("");
            setmname('');
        }
    }

    const actorHandler = (e) =>
    {
        setFilteredmovies([]);
        setdirectorname("");
        setmname('');
        if (e.target.value !== "please select")
        {
            setmname(e.target.value);
            for(let obj of moviedata)
            {
                if(obj["Details"].ActorsNames.includes(e.target.value))
                {
                    setFilteredmovies((ob) => [...ob,obj]);
                }
            }
        }
        else{
            setdirectorname("");
            setmname('');
        }
    }


  return (
    <>
        <div>
        <select onChange={directorHandler}>
            <option value="please select">Please select data</option>
            {directors.map((obj)=>
            {
                return(<option key={obj} value={obj}>{obj}</option>)
            })}
        </select>
        <select onChange={movieHandler}>
        <option value="please select">Please select data</option>
            {moviename.map((obj)=>
            {
                return(<option key={obj.MovieID} value={obj.MovieName}>{obj.MovieName}</option>)
            })}
        </select>
        <select onChange={actorHandler}>
        <option value="please select">Please select data</option>
            {actordata.map((obj,i)=>
            {
                return(<option key={i} value={obj}>{obj}</option>)
            })}
        </select>
    </div>
    <div>
        <Screen filteredmovies={filteredmovies} directorname={directorname} ></Screen>
    </div>
    </>
  );
}
