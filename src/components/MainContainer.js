import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'


export const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    //   if movies is null
    if (!movies) return

    const mainMovie = movies[0]
    const { original_title, overview, id } = mainMovie
    
    return (
        <>
            <VideoTitle title={original_title} overview={overview}  />
            <VideoBackground movieId={id}/>
        </>

    )
}
