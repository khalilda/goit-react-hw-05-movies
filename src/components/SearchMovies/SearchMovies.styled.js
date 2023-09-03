import Styled from 'styled-components';

export const Input = Styled.input`
width: 100%;
padding: 10px;
max-width: 450px;
border-radius: 4px;
border: 1px solid darkblue;
background-color: inherit;
outline: none;
color: #ffffffa2;
font-size: 16px;
height: 40px;
transition: box-shadow 0.4s cubic-bezier(0.4, 0.8, 0.2, 1);

&:hover,
&:focus {
    box-shadow: 0px 0px 10px 1px darkblue;
}
`;

export const SearchBtn = Styled.button`
position: absolute;
top: 0;
right: 0;
background-color: inherit;
border-radius: 5px;
border: solid 1px darkblue;
height: 40px;
width: 40px;
`;

export const Form = Styled.form`
width: 100%;
max-width: 450px;
position: relative;
`;
