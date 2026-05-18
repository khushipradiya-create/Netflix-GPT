import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/now_playing?page=1",
                API_OPTIONS
            );

            

            const json = await data.json();

            dispatch(addNowPlayingMovies(json.results));

        } catch (error) {
            console.log("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;