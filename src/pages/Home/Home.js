import { ContainerHome } from "./Home.styled"
import { Link } from "react-router-dom"
import { getTrendingMovies } from "Api/api"
import { useState } from "react";
import { useEffect } from "react";
export const Home = () => {
    const [TrendingMovies, setTrendingMovies] = useState([])
  useEffect(() => {
    getTrendingMovies()
  .then(resp => setTrendingMovies(resp))
  .catch(err => console.log(err))
  }, [])
    return <section>
        <ContainerHome>
        <h2>Trending Today</h2>
        <ul>
            {TrendingMovies.map(movie => <li><Link key={movie.id} to={`/movies/:${movie.id}`}>{movie.title}</Link></li>)}
        </ul>
        </ContainerHome>
    </section>
}
export default Home