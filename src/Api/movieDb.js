import axios from "axios";


export const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'327060827f204e927b9e7d1d458ba50d',
        language:'es-ES'
    }
});


