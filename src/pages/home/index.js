import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles'

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom1.jpg?ts=1621137632&" alt="tenis" />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR Ao CARRINHO</span>
        </button>
      </li>
    </ProductList>
  )
}
