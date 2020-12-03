import React, {
  createRef,
  useState,
  useEffect
} from 'react';

import cover from '../../../public/prod01.png';
import { Button } from '../buttons';

export const Cart = ({
  config,
  data,
  delItem
}) => {
  const { show, activeMenu } = config;
  const refCart = createRef();

  useEffect(() => {
    if (refCart && refCart.current) {
      refCart.current.style.transform = activeMenu
      ? `translate3d(0, 0, 0)`
      : `translate3d(100%, 0, 0)`;
    }
  }, [activeMenu])

  function handleTotal() {
    if (data) {
     return data.order.reduce((acc, current) => acc + parseInt(current.price), 0)
    }
  }

  return (
    <aside className="c-cart" ref={refCart}>
      <header className="c-cart-header">
        <div className="container">
          <h3 className="c-cart__title">
            Sacola
            <span>{data.order.length > 0 ? data.order.length : 0 } Itens</span>
          </h3>
          <i className="c-cart__close" onClick={() => show() }></i>
        </div>
      </header>
      <ul className="c-cart__list">
        <div className="container">
          {data && data.order.length > 0 ? data.order.map(item =>
            <CardItem
             title={item.title}
             price={item.price}
             del={delItem}
             id={item.id}
            />
          )
          :
          <span class="c-cart__messenger">
            Você ainda não se tornou um Original!
            <label>Gostaria de começar hoje ?</label>
          </span>
          }
        </div>
      </ul>
      <div className="c-cart__freefrete">
        <h3>Faltam R$ xx,xx para você Ganhar frete grátis</h3>
      </div>
      <div className="c-cart__checkout">
        <div className="container">
          <label>
            <span>total: {`${handleTotal() * data.order.length || 0},00`}</span>
            <p>até 3x de R$: {
              `${(handleTotal() / 3).toFixed(2)}`} sem juros</p>
          </label>
          <Button
            className="c-btn--default"
            onPress={() => {} }
          >
            finalizar comprar
          </Button>
        </div>
      </div>
    </aside>
  );
}

export const CardItem = ({
  title,
  price,
  id,
  del,
  handleQuant
}) => {
  const [amount, setAmount] = useState(0);

  function handleQuant(value) {
    if (amount <= 0 && value < 1) return;

    if (value) {
      setAmount(amount + value)
    }
  }

  return (
    <li className="c-cart__list-item">
      <div className="c-cart__list-item__content">
        <img src={cover} alt="" />
       <div className="">
        <h4>{title}</h4>
        <span>R$: 49,90</span>
       </div>
      </div>
      <ol>
        <li onClick={() => handleQuant(-1)}>-</li>
        <li>{amount || '00'}</li>
        <li onClick={() => handleQuant(1)}>+</li>
      </ol>
      <i onClick={() => del(id)}>x</i>
    </li>
  );
}
