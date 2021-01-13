import React from 'react';
import './MainBanner.sass';


const MainBanner = (props) => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-title text-center">
          <h1 className="product-name">
            Hospedagem de Sites
          </h1>
          <h2 className="product-title">
            Tenha uma hospedagem de sites estável e evite perder visitantes diariamente
          </h2>
          <ul className="product-subtitle">
            <li className="check">
              99,9% de disponibilidade: seu site sempre no ar
            </li>
            <li className="check">
              Suporte 24h, todos os dias
            </li>
            <li className="check">
              Painel de Controle cPanel
            </li>
          </ul>
        </div>
        <div className="banner-hero">
        </div>
        <div className="arrow-down">
          <a href="#plans" className="arrow-link">
            <span className="sr-only">Go to plans</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default MainBanner;