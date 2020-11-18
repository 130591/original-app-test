import React, { useState, useRef } from 'react';

import { Button } from '../../../../core/resources/widgets/buttons';
import Modal from '../../../../core/resources/widgets/modal';
import { useProductState } from '../../store';

export const Card = () => {
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(null);

  const ref = useRef(null)

  const [
    [{
      stock,
    }, {
      purchase,
      dispatch2
    }],
    { addToCart, sumAmount }] = useProductState();

  const { products } = stock;

  const handleModal = () => {
    ref.current.toggleModal();
  };

  function handleColor(e) {
    const { colors } = products[0];

    if(colors.includes(e.target.id)) {
      setColor(e.target.id)
    }
  }

  function handleAmount(total) {
    if (total) sumAmount(total, dispatch2)
  }

  function handleSize(e) {
    if (e.target.id) {
     setSize(e.target.id)
    }
  }

  function handlePurchase(e) {
    e.preventDefault();

    const { id, title, cod, price, promoPrice } = products[0];
    const salePrice = promoPrice || price;

    const purchace = {
      id: id,
      title,
      cod,
      size: size,
      price: salePrice,
      color: color,
    }

    if (size && color) {
      addToCart(purchace, dispatch2)
      handleModal()
      handleAmount()
    } else {
      alert('Ops! Você precisa escolher uma cor e tamanho para prosseguir')
    }
  }

  return (
    <>
    <div className="c-card">
      <h1 className="l-product-buyZone__title">
        {products && products[0] ? products[0].title : null }
      </h1>
      <span className="l-product-buyZone__desc">
        {products && products[0] ? products[0].cod : null}
      </span>
      <ol className="c-card__choise">
        <span className="c-card__choise__title">Cor:</span>
        <div className="c-card__choise__colors">
          {
          products && products[0] ?
          products[0].colors.map(colorc =>
            <li
              id={colorc}
              style={{
                border: colorc == color ? `2px solid ${'#de8f75'}` : null }}
              onClick={(e) => handleColor(e)}></li>
           )
            : null
          }
        </div>
      </ol>
      <ul className="c-card__size">
        <div className="c-card__size-guide">
          <span>tamanho:</span>
          <a href="#" alt="guia de medidas" >Guia de medidas</a>
        </div>
        <div className="c-card__size-number">
          {
            products && products[0] ?
            products[0].size.map(number =>
              <li
                id={number}
                onClick={(e) => handleSize(e)}
                style={{
                  backgroundColor: number == size ? '#de8f75' : null,
                  color: number == size ? '#fff' : '#000'
                }}
              >
                {number}
              </li>
            )
            : null
          }
        </div>
      </ul>
      <div className="c-card__sale">
        <span>
          {products && products[0] ? `R$: ${products[0].price},00` : null }
        </span>
        <h3>
        {products && products[0] ? `R$: ${products[0].promoPrice}` : null }
        </h3>
        <p>
          {
          products && products[0] ?
          `Ou
            ${products[0].installmentPurchase.portion}x
            de R$: ${products[0].installmentPurchase.value}`
            : null
          }
        </p>
      </div>
      <Button
        className="c-btn--default"
        onPress={handlePurchase}
        >
        adicionar à sacola
      </Button>
      <div className="c-card__desc">
        <h3>descrição</h3>
        <p>
          {products && products[0] ? products[0].description: null}
        </p>
      </div>
    </div>
    <Modal ref={ref}>
      <i
       className="c-modal__close"
       onClick={(e) => handleModal(e)}
      ></i>
      <div className="container">
        <img
          id={products && products[0] ? products[0].id[0] : null}
          src={products && products[0] ? products[0].cover[0] : null}
          alt="sandália" />
        <h2 className="c-modal__title">
          Produto Adicionado com sucesso!
        </h2>
        <Button className="c-btn--default">
          Finalizar a compra
        </Button>
        <a
          className="c-modal__desc"
          onClick={(e) => handleModal(e)}
        >
          continuar Comprando
        </a>
      </div>
    </Modal>
    </>
  );
}
