import React from 'react';
import './index.scss'

export const AuthLayout = ({children}) => {
    return (
        <div className={'auth-container'} >
            <div className="auth-lc">
                <img src={`${process.env.PUBLIC_URL}/images/logo-v.svg`} alt="Loft taxi" className="auth-logo"/>
            </div>
            <div className="auth-rc" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/map.png)`}}>
                {children}
            </div>
        </div>
    );
};