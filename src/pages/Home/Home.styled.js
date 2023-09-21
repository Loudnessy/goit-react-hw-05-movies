import styled from "styled-components"
export const ContainerHome = styled.div`
     max-width: 1200px; 
  margin: 0 auto; 
  padding: 20px; 
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  ul {
  list-style: none; /* Убрать маркеры списка */
  padding: 0; /* Убрать внутренний отступ */
  margin: 0; /* Убрать внешний отступ */
}
  li {
   margin-bottom: 10px; /* Отступ между элементами списка */
  padding: 10px; /* Внутренний отступ вокруг элемента списка */
  border: 1px solid #ddd; /* Граница элемента списка */
  border-radius: 4px; /* Закругленные углы элемента списка */
  background-color: #f9f9f9; /* Фон элемента списка */
  }
  li:hover {
  background-color: #e0e0e0; /* Изменить фон при наведении */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Добавить тень при наведении */
}
a {
   display: block;
   width: 100%; 
   height: 100%;
}
  `