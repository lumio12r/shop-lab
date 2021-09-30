import React from 'react';
import Directory from '../../component/directory/directory';


import './homepage.styles.scss'

const HomePage = ({ history }) => (
    <div className='homepage'>
       <Directory history={history} />
    </div>
);

export default HomePage;