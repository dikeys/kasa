import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1 className='error__code'>404</h1>
            <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error__link-home' to="/">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default ErrorPage;