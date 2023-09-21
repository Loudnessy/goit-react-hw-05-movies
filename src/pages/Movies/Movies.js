import { getSearchMovie } from "Api/api";
import { StyledForm, StyledUl } from "./Movies.styled"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import { ContainerHome } from "pages/Home/Home.styled";
import { useLocation } from "react-router-dom";
const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [SearchMovie, setSearchMovie] = useState({})
        const query = searchParams.get("query")
  const onFormSubmit = async (evt) => {
    evt.preventDefault()
    await setSearchParams({query: evt.target.search.value})
  }
  const location = useLocation();
  useEffect(() => {
    if (query === null) {
        setSearchMovie('')
        return
    }
    getSearchMovie(`query=${query}`)
    .then(resp => setSearchMovie(resp))
    .catch(err => console.log(err))
  }, [searchParams, query])
  
    return <section>
        <ContainerHome>
    <StyledForm onSubmit={onFormSubmit}>
    <input name="search" placeholder="Movie Name" />
    <button type="submit">Search</button>
    </StyledForm> 
    <div>
        <StyledUl>
            {SearchMovie.results && SearchMovie.results.map(movie => <li>
                <Link key={movie.id} to={`/movies/:${movie.id}`} state={{ from: location }}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="250" alt={`${movie.title} poster`}></img>
                <h2>{movie.title}</h2>
                </Link>
            </li>)}
        </StyledUl>
    </div>
    </ContainerHome>
    </section>
    
}
export default Movies