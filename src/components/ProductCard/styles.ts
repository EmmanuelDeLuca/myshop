import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  max-width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const ProductImage = styled.img`
  width: 90%;
  

`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    

`;

export const AddToCardButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 1rem;
  background-color: #1b243c;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  svg {
        font-size: 1rem;
    }
`;
