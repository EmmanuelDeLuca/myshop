import React from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import * as S from './styles'

export const ProductsList: React.FC = () => {
    return(
        <S.Container>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </S.Container>
    )
}