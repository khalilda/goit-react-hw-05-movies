import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  display: flex;
  padding: 15px;
  width: 100%;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  border-top: solid 1px #1e1e1e;
  box-shadow: 0 0 13px 3px #1e1e1e;

  > div {
    align-items: center;
    display: flex;
    gap: 10px;
  }
`;

export const Icon = styled(BsGithub)`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: fill 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #1e1e1e;
  }
`;
