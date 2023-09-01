import styled from 'styled-components';

export const MoviesItems = styled.li`
position: relative;
border: 1px solid #560206;
border-radius: 5px;
overflow: hidden;
max-width: 300px;
transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
box-shadow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
scale 0.4s cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
    transform: scale(1.03);
    box-shadow: 0px 0px 10px 1px #e50914;
}
`;
