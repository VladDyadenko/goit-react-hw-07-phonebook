import styled from '@emotion/styled';

export const Box = styled.ul`
  width: 100%;
  border-top: 2px solid #006400;
  margin: 20px auto;
  padding: 5px;
  list-style: none;

  font-size: 18px;
`;
export const List = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  /* grid-template-columns: 30px repeat(2, 80px 80px) 100px; */
  margin-bottom: 8px;
`;
export const ContactName = styled.span`
  min-width: 30%;
  margin-right: 10px;
  font-size: 13px;
  color: #8b4513;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 180px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 18px;
  }
`;
export const ContactNumber = styled.span`
  min-width: 30%;
  margin-right: 10px;
  color: #2d2d2d;
  font-size: 13px;
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 160px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    font-size: 18px;
  }
`;

export const Btn = styled.button`
  border: none;
  width: 90px;
  padding: 0 5px;
  cursor: pointer;

  font-family: 'Roboto Slab', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-radius: 4px;
  color: #ffffff;
  background-color: #188ce8;
  display: flex;

  justify-content: center;
  align-items: center;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;
