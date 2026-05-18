import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';



export const VideoBackground = ({ movieId }) => {

    // we can also use redux store for this
   const  [trailerId, setTrailerId] = useState(null)

    // fetch data from api
    const getMovieVideos = async () => {

        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();

        const filterData =  json.results.filter(video => video.type == "Trailer")
        // we want just one
        const trailer = filterData.length? filterData[0] :json.results[0]
        setTrailerId(trailer.key)

    }


    useEffect(() => {
       
        getMovieVideos()

    }, [])




    return (
        <div className='w-screen'>
        <iframe  className='w-full aspect-video'
         src={` https://www.youtube.com/embed/${trailerId}?si=DAo1NKK3Qu6DkJvT?&autoplay=1&mute=1`}
         title="YouTube video player" 
         allow=" picture-in-picture; web-share" 
         
         allowFullScreen></iframe>

        </div>
    )
}


