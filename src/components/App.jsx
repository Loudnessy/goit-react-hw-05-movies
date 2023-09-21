import { Routes, Route} from "react-router-dom";
import { StyledHeader, StyledNav, StyledNavlink, Container } from "./Header/Header.styled";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { lazy, Suspense } from "react";
export const App = () => { 
  const Home = lazy(() => import("../pages/Home/Home"));
  const Movies = lazy(() => import("../pages/Movies/Movies"));
  const Cast = lazy(() => import("../components/Cast/Cast"));
  const Reviews = lazy(() => import("../components/Reviews/Reviews"));
  return <>
  <StyledHeader>
   <Container>
      <StyledNav>
        <StyledNavlink to="/">Home</StyledNavlink>
        <StyledNavlink to="/movies">Movies</StyledNavlink>
      </StyledNav>
   </Container>
  </StyledHeader>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
      <Route path="cast" element={<Cast/>}/> 
      <Route path="reviews" element={<Reviews/>}/>
      </Route>
      <Route path="*" element={<div>There is no pages with this URL</div>}></Route>
    </Routes>
  </Suspense>
  </>
};
