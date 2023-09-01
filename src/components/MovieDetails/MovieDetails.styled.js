import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainSlyels = styled.main`
  min-height: calc(100vh - 64px);
  padding: 20px;
`;

export const BtnGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 8px 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #e50914;
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: inherit;
  color: inherit;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 1px #e50914;
  }
`;
