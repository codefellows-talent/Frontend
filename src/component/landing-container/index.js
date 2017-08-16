import '../../style/_landing-container.scss';
import React from 'react';
import { Link } from 'react-router-dom';


class LandingContainer extends React.Component{

  render(){
    return(
      <div>
        <img className='landing-hero' src='https://s3.amazonaws.com/codefellows-hiring-partners/Screen+Shot+2017-08-14+at+11.27.09+PM.png'/>
        <h1 id="grad-hiring">Graduate Hiring</h1>
        <h6 id="grad-hiring-info">Anonymously find the perfect candidate for you.</h6>
        <div className='graduate-image-container'>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
        </div>
        <div id="pictures-box">
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/saul.jpg'/>
            <p>If you understand everything your learning, start paying more attention</p>
            <h5>Saul Greene</h5>
            <h6>Full Stack Javascript Engineer</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/felix.png'/>
            <p>If you understand everything your learning, start paying more attention</p>
            <h5>Saul Greene</h5>
            <h6>Full Stack Javascript Engineer</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/nicu.png'/>
            <p>If you understand everything your learning, start paying more attention</p>
            <h5>Saul Greene</h5>
            <h6>Full Stack Javascript Engineer</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/michael.jpeg'/>
            <p>If you understand everything your learning, start paying more attention</p>
            <h5>Saul Greene</h5>
            <h6>Full Stack Javascript Engineer</h6>
          </div>
        </div>
        <div>
          <img className='landing-hero2' src='https://s3.amazonaws.com/codefellows-hiring-partners/Screen+Shot+2017-08-14+at+11.27.09+PM.png'/>
          <div id="take-a-look">
            <h1 id="grad-explination">Take a Look</h1>
            <h6 id="grad-explination-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
            <Link to='/talents' className='landing-talent-button'>Talent</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
