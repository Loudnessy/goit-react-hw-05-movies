import { getMovieById } from "Api/api";
import { useParams, Outlet} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ContainerMovie, StyledDiv, StyledLinkMovie, StyledDivTitle, StyledLinkCast, StyledLinkReviews, StyledDivLinks } from "./MovieDetails.styled";
export const MovieDetails = () => {
    const [MovieData, setMovieData] = useState({})
    const { movieId } = useParams();
    const id = movieId.slice(1)
    useEffect(() => {
      getMovieById(id)
      .then(resp => setMovieData(resp))
      .catch(err => console.log(err))
    }, [])
    const {title, genres, overview, vote_average} = MovieData
    const genresForPage = genres ? genres.map(el => el.name).join(" ") : [];
    const userScore = Math.round(vote_average * 10)
    return <section>
        <ContainerMovie>
            <StyledLinkMovie to="/">Go back</StyledLinkMovie>
        <StyledDiv>
            <img src={'https://image.tmdb.org/t/p/original' + MovieData.poster_path} alt="img" width="250"></img>
           <StyledDivTitle>
               <StyledDivTitle>
                    <h2>{title}</h2>
                    <p>User score: {userScore}%</p>
               </StyledDivTitle>
                <StyledDivTitle>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </StyledDivTitle>
                <StyledDivTitle>
                    <h3>Genres</h3>
                    <p>{genresForPage}</p>
                </StyledDivTitle>
           </StyledDivTitle>
        </StyledDiv>
        <StyledDivLinks>
            <StyledLinkCast to="cast">Cast</StyledLinkCast>
            <StyledLinkReviews to="reviews">reviews</StyledLinkReviews>
        </StyledDivLinks>
        <Outlet/>
        </ContainerMovie>
    </section>
}