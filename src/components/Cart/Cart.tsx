import React from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { Product } from "../ProductCard/ProductCard";

interface CartProps {
  showCart: boolean;
  cart: Product[];
}


export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  

  const dispatch = useDispatch()

  const total = cart.reduce((totalCart, product)=>{return totalCart+product.price}, 0)
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho </S.Title>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <S.RemoveCartButton onClick={()=>dispatch(removeProduct(product))}>Remover <MdDeleteOutline/> </S.RemoveCartButton>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
