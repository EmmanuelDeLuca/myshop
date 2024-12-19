import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1b243c;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 75px;
`;

export const HeaderTitle = styled.h1`
    font-size: 1.6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button`
  //
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1rem;
  background-color: #4769d8;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
   
    svg {
        font-size: 1rem;
    }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1rem;
  background-color: #869AB8;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;

  svg {
        font-size: 1rem;
    }
`;
