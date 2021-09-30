import React from "react";
import { withRouter } from 'react-router-dom';

import './menu.styles.scss';

const Menu = ({ title, img, size, history, link, match }) => (
    <div className={`${size} menu`} onClick={() => history.push(`${match.url}${link}`)}>
    <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${img})`
        }} 
    />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(Menu);