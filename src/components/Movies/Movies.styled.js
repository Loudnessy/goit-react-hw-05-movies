import styled from "styled-components";
export const StyledForm = styled.form`
 text-align: center; /* Вирівнювання елементів по центру */
  margin: 20px auto; /* Зовнішні відступи */
  max-width: 400px; 
input {
    width: 100%; /* Ширина поля на всю доступну ширину форми */
  padding: 10px; /* Внутрішні відступи */
  margin-bottom: 10px; /* Відступи між полем введення та кнопкою */
  border: 1px solid #ccc; /* Обрамлення поля введення */
  border-radius: 5px; 
}
button {
    background-color: #007BFF; /* Колір фону кнопки */
  color: #fff; /* Колір тексту на кнопці */
  padding: 10px 20px; /* Внутрішні відступи */
  border: none; /* Видалення границі */
  border-radius: 5px; /* Закруглені кути кнопки */
  cursor: pointer;
}
input::placeholder {
  color: #999; /* Колір плейсхолдера */
}

`
export const StyledUl = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 25px;
li {
    display: block;
    width: 250px;
}
`