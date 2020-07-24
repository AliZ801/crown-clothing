import React from 'react';

import './homepage.styles.scss';
import Directory from '../components/directory-menu/directory-menu.component';


const HomePage = ({history}) => (
    <div className='homepage'>
        <Directory history = {history} />
    </div>
)

export default HomePage;