import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return (
      <div className='header'>
        <header>
          <nav>
            <img  src='https://s3.amazonaws.com/401-hire-cf/cf-logo-horizontal-2-color-white.png'/>
            <ul>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to='/talents'>Talent</Link> </li>
              <li><Link to='contact'>Contact</Link> </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
