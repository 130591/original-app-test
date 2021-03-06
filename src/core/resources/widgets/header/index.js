import React, { useState } from 'react';

import account  from '../../../public/ic_search_black_24px.svg';
import cart from '../../../public/shopping_cart.svg';
import logo from '../../../public/logo-original-io-footer.svg';

import { Image } from '../image';
import { Cart } from '../cart';

export const Header = ({
  children,
  data,
  actions
}) => {
  const [activeMenu, setActiveMenu] = useState(false);

  function show() {
    setActiveMenu(!activeMenu);
  }

  return (
    <>
    <Cart
      config={ { activeMenu, show } }
      data={data}
      delItem={actions}
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
        <div class="c-header__explore">
          <div class="c-header__search">
            <input type="text" name="search" />
            <span class="icon-search">
              <svg width="21" height="21" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.517 4C7.81321 4 4 7.8131 4 12.5169C4 17.2208 7.81321 21.0342 12.517 21.0342C14.4706 21.0342 16.2704 20.3766 17.7074 19.2705L23.1132 24.6762C23.5448 25.1079 24.2447 25.1079 24.6763 24.6762C25.1079 24.2447 25.1079 23.5448 24.6763 23.1133L19.2704 17.7073C20.3764 16.2704 21.0341 14.4706 21.0341 12.5169C21.0341 7.8131 17.2209 4 12.517 4ZM6.21053 12.5169C6.21053 9.03413 9.03404 6.21053 12.517 6.21053C16 6.21053 18.8235 9.03413 18.8235 12.5169C18.8235 16 16 18.8236 12.517 18.8236C9.03404 18.8236 6.21053 16 6.21053 12.5169Z" fill="black"/>
              </svg>
            </span>
            <button class="c-btn">busca</button>
          </div>
          <div className="c-header__cart">
            <Image path={cart} legend={'cart'} onPress={show} />
            <span>{ data && data.order ? data.order.length : 0 }</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
