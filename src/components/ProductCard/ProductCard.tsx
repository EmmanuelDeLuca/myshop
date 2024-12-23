import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const ProductCard: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProduct() {
      const response = await axios.get("https://fakestoreapi.com/products");

      const newsProduct = response.data;
      setProduct(newsProduct);
    }

    loadProduct();
  }, []);

  return (
    <>
      {product.map((elements) => {
        return (
          <S.Card key={elements.id}>
            <S.ProductImage src={elements.image} alt={elements.description} />
            <S.ProductTitle>{elements.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
              <S.Review>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.round(elements.rating.rate) ? (
                    <AiFillStar key={index} />
                  ) : (
                    <AiOutlineStar key={index} />
                  )
                )}
                {`(${elements.rating.rate})`}
              </S.Review>
              <S.Price>{`$${elements.price}`}</S.Price>
            </S.ReviewPriceContainer>
            <S.AddToCardButtonWrapper>
              <S.AddToCardButton>
                Adicionar ao Carrinho
                <FiShoppingCart />
              </S.AddToCardButton>
            </S.AddToCardButtonWrapper>
          </S.Card>
        );
      })}
    </>
  );
};
