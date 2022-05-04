import React from 'react';

import Logo from '../../assets/img/logo.svg';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer__logo-link">
      <img
        className="footer__logo"
        src={Logo}
        alt="logo"
        width="64"
        height="33"
      />
    </div>
  </footer>
);

export default Footer;
