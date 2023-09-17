import styled from "styled-components";
import { Link } from "react-router-dom"
export const StyledLinkMovie = styled(Link)`
display: block;
border: 2px solid pink;
width: 150px;
height: 25px;
background-color: white;
border-radius: 25px;
text-align: center;
margin-bottom: 25px;
font-weight: bold;
color: black;
`
export const ContainerMovie = styled.div`
     max-width: 1200px; 
  margin: 0 auto; 
  padding: 20px; 
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
  font-size: 24px; /* Размер шрифта заголовка в контейнере */
  margin-bottom: 20px; /* Внешний отступ снизу для заголовка */}
  p {
  color: #333333; /* Цвет текста в контейнере */
}
a {
   background-color: #0073e6; /* Цвет фона кнопки */
  color: white; /* Цвет текста кнопки */
  padding: 10px 20px; /* Внутренние отступы кнопки */
  border: none; /* Убрать границу кнопки */
  border-radius: 5px; /* Закруглить углы кнопки */
  text-decoration: none; /* Убрать подчеркивание ссылки */
  transition: background-color 0.3s;
}
a:hover {
   background-color: #005abf; /* Цвет фона кнопки при наведении */
}
img {
   margin-right: 25px;
}
  `
  export const StyledDiv = styled.div`
  display: flex;
  `
  export const StyledDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  `
  export const StyledLinkCast = styled(Link)`
  display: block;
  width: 29px;
height: 25px;
  `
  export const StyledLinkReviews = styled(Link)`
  display: block;
  width: 50px;
height: 25px;
  `
  export const StyledDivLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 25px;
  `
