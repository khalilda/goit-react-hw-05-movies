import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  min-height: 50px;
  border-top: 1px solid #fff;
  box-shadow: 0px 0px 10px 1px #fff;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const Icon = styled(BsGithub)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
  transition: fill 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #000;
  }
`;
