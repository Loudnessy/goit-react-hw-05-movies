import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledHeader = styled.header`
     background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
     background-color: orange;
  `
 export const StyledNavlink = styled(NavLink)`
   text-decoration: none; /* Убрать подчеркивание ссылок */
   color: #fff; /* Цвет текста ссылок */
  font-weight: bold; /* Жирный шрифт для ссылок */
  transition: color 0.3s;
  &:hover {
    color: pink;
  }
&.active {
  color: pink;
}
`
export const StyledNav = styled.nav`
    display: flex;
    gap: 25px;
  `
  export const Container = styled.div`
  max-width: 1200px; 
margin: 0 auto; 
padding: 20px; 
`