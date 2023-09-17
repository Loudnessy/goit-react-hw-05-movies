import { Home } from "./Home/Home";
import { Routes, Route} from "react-router-dom";
import { Movies } from "./Movies/Movies";
import { StyledHeader, StyledNav, StyledNavlink, Container } from "./Header/Header.styled";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
export const App = () => { 
  return <>
  <StyledHeader>
   <Container>
      <StyledNav>
        <StyledNavlink to="/">Home</StyledNavlink>
        <StyledNavlink to="/movies">Movies</StyledNavlink>
      </StyledNav>
   </Container>
  </StyledHeader>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movies" element={<Movies/>}></Route>
    <Route path="/movies/:movieId" element={<MovieDetails/>}>
    <Route path="cast" element={<Cast/>}/> 
    <Route path="reviews" element={<Reviews/>}/>
    </Route>
    <Route path="*" element={<div>bro</div>}></Route>
  </Routes>
  </>
};
