import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";
import axios from "axios";
import { Product } from "../ProductCard/ProductCard";
import { ThreeDots } from "react-loader-spinner";

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
      {products.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height={80}
              width={80}
              radius={9}
              color={"#1b243c"}
              ariaLabel={"loading"}
              wrapperStyle={{ marginTop: "20px", display: "flex" }}
              wrapperClass="spinner-class"
            />
          </div>
        ) : (
          products.map((product) => {
            return (
              <ProductCard key={product.id} products={product} />
            );
          })
        )}
    </S.Container>
  );
};
