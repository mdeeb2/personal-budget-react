import React from 'react';

import {
    
    Link
  } from "react-router-dom";
  

function Menu() {
  return (
    <div className="menu">
      
        <nav>  
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
               
              
                <li> <a className="skip-to-content-link" href="#main"> 
                    Skip to content
                  </a></li>
            </ul>

        </nav>   
      
    </div>
  );
}

export default Menu;
