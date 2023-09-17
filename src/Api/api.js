import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const getTrendingMovies = async () => {
     const resp = await axios.get('/trending/movie/day?api_key=e8524843ebc3fd7f994099fcca5f13fd')   
     return await resp.data.results
}
export const getMovieById = async (id) => {
    const resp = await axios.get(`/movie/${id}?api_key=e8524843ebc3fd7f994099fcca5f13fd`)
    return await resp.data
}
export const getCreditsById = async (id) => {
    const resp = await axios.get(`/movie/${id}/credits?api_key=e8524843ebc3fd7f994099fcca5f13fd`)
    return await resp.data
}
export const getMovieReviews = async (id) => {
    const resp = await axios.get(`/movie/${id}/reviews?api_key=e8524843ebc3fd7f994099fcca5f13fd`)
    return await resp.data
}
