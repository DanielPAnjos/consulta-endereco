import React from "react";

import Main from '../../Components/Main';
import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <div id='home'> 
        
            <FontAwesomeIcon icon={faMapMarkedAlt   } size='7x' style={{color:'yellowgreen', zIndex:'1'}} />
            <Main />
             
        </div>
    )
}

export default Home;