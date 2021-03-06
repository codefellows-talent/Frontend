import '../../style/_header.scss';

import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <div className='header'>
        <header>
          <nav>
            <container>
              <img src='https://s3.amazonaws.com/401-hire-cf/cf-logo-horizontal-2-color-white.png'/>
            </container>
            <div>
              <ul>
                <li><Link className='nav-a' to='/'>Home</Link> </li>
                <li><Link className='nav-a' to='/talents'>Talent</Link> </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
