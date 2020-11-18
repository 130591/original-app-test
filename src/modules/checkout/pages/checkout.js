import React, { useEffect } from 'react';

import img from '../../../core/public/prod02.png'

import { Header } from '../../../core/resources/widgets/header';
import { Footer } from '../../../core/resources/widgets/footer';
import { Image } from '../../../core/resources/widgets/image';

import { Carrosel, ImageCarrosel } from '../components/carrosel';
import { Card } from '../components/product-checkout/card-checkout';
import { GalleryProduct, Thumbnail } from '../components/product-checkout/gallery-product';

import { useGetProduct, useProductState } from '../store';

export const CheckoutPage = () => {
  const [[{stock, dispatch }]] = useProductState()
  useGetProduct(dispatch);

  const { products }  = stock;

  return (
    <>
    <Header />
      <ul className="c-breadcrumb">
        <div className="container">
          <li>home</li>
          <li>sapatos</li>
        </div>
      </ul>
      <div className="l-product-buyZone">
        <div className="container">
          <h1 className="l-product-buyZone__title">
            { products && products[0] ? products[0].title : ''}
          </h1>
        <span className="l-product-buyZone__desc">
        {products && products[0] ? products[0].code : ''}
        </span>
          <GalleryProduct
            covers={products[0] && products[0].cover}
          >
            <Thumbnail>
               {
               products && products[0] ?
               products[0].cover.map(photo => {
                return <Image path={photo} legend={'calçado'} />
               }) : null
              }
            </Thumbnail>
          </GalleryProduct>
          <Card />
        </div>
      </div>
      <h2 className="c-title">quem viu, viu também</h2>
      <Carrosel
        responsive={[
          { 0: {item: 5, device: 1040}},
          { 1: {item: 5, device: 460}}
        ]}
      >
        {products && products[0] ?
          products[0].recommended.map(item =>
           <ImageCarrosel
             path={img}
             value={item.price}
            />
          ) : null }
      </Carrosel>
    <Footer />
    </>
  );
}
