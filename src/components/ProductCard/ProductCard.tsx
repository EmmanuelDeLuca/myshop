import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductCartProps {
  products: Product;
}

export const ProductCard: React.FC<ProductCartProps> = ({ products }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const isProductOnCart =
    cart.find((productOnCart) => products.id === productOnCart.id) !==
    undefined;

  function handleAddProductToCart() {
    dispatch(addProduct(products))
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(products))
  }

  return (
    <S.Card key={products.id}>
      <S.ProductImage src={products.image} alt={products.description} />
      <S.ProductTitle>{products.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(products.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {`(${products.rating.rate})`}
        </S.Review>
        <S.Price>{`$${products.price}`}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCardButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCardButton>
        )}
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
