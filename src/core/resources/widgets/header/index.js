import React, { useState } from 'react';

import account  from '../../../public/ic_search_black_24px.svg';
import cart from '../../../public/shopping_cart.svg';
import logo from '../../../public/logo-original-io-footer.svg';

import { Image } from '../image';
import { Cart } from '../cart';
import { useProductState } from '../../../../modules/checkout/store';

export const Header = ({
  children
}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const [[{ stock }, { purchase, dispatch2 }], { delToCart, sumAmount }] = useProductState();

  function show() {
    setActiveMenu(!activeMenu);
  }

  return (
    <>
    <Cart
      config={ { activeMenu, show } }
      data={purchase}
      delItem={(id) => delToCart(id, dispatch2)}
    />
    <header className="c-header">
      <div className="container">
        <span />
        <a href="#" alt="logo" >
          <img src={logo} className="c-header__brand" alt="" />
        </a>
        <ul className="c-header__shopping">
          <li >
            <img src={account} alt="" />
          </li>
          <li >
          <img src={cart} alt="" />
          </li>
        </ul>
      </div>
    </header>
    <nav className="c-header__nav">
      <div className="container">
        <div className="c-header__nav-login">
          <span>entrar</span>
          <span>|</span>
          <span>cadastrar-se</span>
        </div>
        <ul className="c-header__links">
          <li>sapatos</li>
          <li>bolsas</li>
          <li>acessórios</li>
          <li>off</li>
        </ul>
        <div className="c-header__cart">
          <Image path={cart} legend={'cart'} onPress={show} />
          <span>{ purchase && purchase.order ? purchase.order.length : 0 }</span>
        </div>
      </div>
    </nav>
    </>
  );
};
