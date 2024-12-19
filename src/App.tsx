import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <ProductCard/>
    </>
  );
}

export default App;
