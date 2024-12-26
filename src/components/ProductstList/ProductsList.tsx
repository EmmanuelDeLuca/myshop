import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";
import axios from "axios";
import { Product } from "../ProductCard/ProductCard";

export const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Atualiza o estado com os produtos
    }
    loadProducts();
  }, []);

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </S.Container>
  );
};
