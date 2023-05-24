import React from 'react';
import logo from "../../assets/img/logo-footer.svg";


const Footer = () => {
    return (
        <footer className="footer">
			<img src={logo} alt="logo de kasa" />
			<p className="footer__heading">© 2020 Kasa. All rights reserved</p>
		</footer>
    );
};

export default Footer;