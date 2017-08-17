import '../../style/_landing-container.scss';
import React from 'react';
import { Link } from 'react-router-dom';


class LandingContainer extends React.Component{

  render(){
    return(
      <div>
        <img className='landing-hero' src='https://s3.amazonaws.com/codefellows-hiring-partners/helloquence-61189.jpg'/>
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
            <p>Full Stack Javascript Developer, with a focus in UI/UX design</p>
            <h5>Saul Greene</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/felix.png'/>
            <p>Full Stack Javascript Developer, with a focus in backend development</p>
            <h5>Ryan Felix</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/nicu.png'/>
            <p>Full Stack Javascript Developer, with a history in software development</p>
            <h5>Nicu Parente</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className="item">
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/michael.jpeg'/>
            <p>Full Stack Javascript developer, with experience in Ruby on Rails.</p>
            <h5>Michael Porter</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
        </div>
        <div>
          <img className='landing-hero2' src='https://s3.amazonaws.com/codefellows-hiring-partners/Screen+Shot+2017-08-14+at+11.27.09+PM.png'/>
          <div id="take-a-look">
            <h1 id="grad-explination">Take a Look</h1>
            <h6 id="grad-explination-text">With the industrys shortage for software developers, tech companies have found a reliable talent pipeline at Code Fellows. By focusing on training diverse, highly capable developers, we’re opening doors for companies to bring in new talent and diversify the abilities and the culture of their teams. Please take a look and possibly join Expedia, OfferUp, Nordstrom, Nike, and over 400 other companies who have hired our grads.</h6>
            <Link to='/talents' className='landing-talent-button'>Talent</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
