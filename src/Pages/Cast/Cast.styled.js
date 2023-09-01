import styled from 'styled-components';

export const CastWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-top: 1px solid #fff;
  flex-wrap: wrap;
`;

export const CastBox = styled.li`
width: 100px;
height: 250px;
}
`;

export const Photo = styled.img`
  height: 150px;
  margin-bottom: 15px;
`;

export const Name = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Character = styled.p`
  font-size: 8px;
`;

export const ErrorText = styled.p`
  font-size: 20px;
  text-align: center;
`;
