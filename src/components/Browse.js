
import Header from './Header'
import { data } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer'
import  SecondaryContainer from './SecandaryContainer'

const Browse = () => {

  useNowPlayingMovies()



  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      main container
        - video background
        - video title
      secondary container
        - Movies list *n 
          - cards *n
       */}

    </div>

  )
}

export default Browse