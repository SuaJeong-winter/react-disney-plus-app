import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';

const DetailPage = () => {
    let {movieId} = useParams();
    //let movieId = useParams().movieId; 와 동일하다
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(
                    `/movie/${movieId}`
            )
            setMovie(response.data);
        }
        fetchData();
    }, [movieId])
    
    if (!movie) return null;
    return(
        <section>
            <img
                className='modal__poster-img'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="img"
            />
        </section>
    )
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage