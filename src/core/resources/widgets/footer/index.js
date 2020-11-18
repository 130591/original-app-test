import React, { useEffect, useState } from 'react';

import img from '../../../public/logo-original-footer.svg';
import { Image } from '../image';

import { Form, Input } from '../form';
import { Button } from '../buttons';
import { useIsMobile } from '../../../../modules/checkout/hooks/useIsMobile';

export const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__content">
        <div className="container">
          <FooterSection title="institucional" links={['A Marca', 'Lojas', 'Contato']} />
          <FooterSection title="informaçôes" links={['A Marca', 'Lojas', 'Contato']} />
          <FooterSection title="conheça" links={['A Marca', 'Lojas', 'Contato']} />
          <FooterPartners />
          <div className="c-footer__news">
          <h3 className="c-footer__news-title">assine nossa news</h3>
          <Form>
            <div className="container">
              <Input name='name' type='text' placeholder='Name' />
              <div className="c-footer__fildsContent">
              <Input name='email' type='email' placeholder='E-mail'/>
              <Button className='c-btn--primary' fullscreen={true} >enviar</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      </div>

      <section className="c-footer__bottom">
        <div className="container">
          <p>
            Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
            Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
            CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
          </p>
          <Image path={img} legend="logo original" />
        </div>
      </section>
    </footer>
  );
}

const FooterPartners = () => {
  return (
    <div className="c-footer__partners">
      <div className="container">
        <ul className="c-footer__social">
          <li id="f"></li>
          <li id="i"></li>
          <li id="p"></li>
        </ul>
        <ul className="c-footer__brands">
          <li id="vtex"></li>
          <li id="ebit"></li>
        </ul>
      </div>
    </div>
  );
}

const FooterSection = ({
  title,
  links
}) => {

  const [isActive, setIsActive] = useState(false);
  const [isMobile] = useIsMobile();

  function handleCollapse() {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className="c-footer__inst">
    <div className="c-footer__section">
      <div className="container">
        <span className="c-footer__section__title">{title}</span>
        <i
          className="c-footer__section__icon"
          onClick={() => handleCollapse()}
        >+</i>
      </div>
    </div>
    <ul>
      <li className="c-footer__content">
        <ul
          className="container c-footer__links"
          style={isMobile ? (isActive ? {
            height: 'inherit',
            opacity: 1,
          } : {
            height: `1px`,
            opacity: 0,
          }) : null }
        >
          <div className="c-footer__links-fast">
            {links.map(link => {
              return <li>{link}</li>
            })}
          </div>
        </ul>
      </li>
    </ul>
  </div>
  </>
  )
}
