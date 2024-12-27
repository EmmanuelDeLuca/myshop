import styled from "styled-components";
interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};
  width: 350px;
  background-color: white;
  height: 100vh;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: right 0.5s;
  color: black;
`;

export const Title = styled.h1`
  
`;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartTotal = styled.strong``;

export const RemoveCartButton  = styled.button`
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 120px;
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

