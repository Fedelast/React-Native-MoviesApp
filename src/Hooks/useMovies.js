import { useEffect, useState } from "react";
import { movieDB } from "../Api/movieDb"




export const useMovies = () => {

    const [isLoading,SetisLoading] = useState(true);
    const [movieState,setMovieState] = useState({});
    


    const getMovies = async()=>{

        const nowPlaying =  movieDB.get('/now_playing');
        const popular =  movieDB.get('/popular');
        const news =  movieDB.get('/upcoming');

        const responses = await Promise.all([nowPlaying,popular,news]);

        setMovieState({
            nowPlaying:responses[0].data.results,
            popular:responses[1].data.results,
            news:responses[2].data.results
        })
        


        SetisLoading(false)
    }


    useEffect(()=>{
        getMovies()
    },[])



    return {
        ...movieState,
        isLoading
        
    }
}
