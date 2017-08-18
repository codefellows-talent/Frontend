import '../../style/_landing-container.scss';
import React from 'react';
import { Link } from 'react-router-dom';


class LandingContainer extends React.Component{

  render(){
    return(
      <div>
        <img className='landing-hero' src='https://s3.amazonaws.com/codefellows-hiring-partners/helloquence-61189.jpg'/>
        <h1 id="grad-hiring">Graduate Hiring</h1>
        <h6 id="grad-hiring-info">Unbiased Resumes to Identify Qualified Candidates</h6>
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
            <p>FullStack Developer that loves DevOps</p>
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
            <h2 id="grad-explination">Take a Look</h2>
            <br></br>
            <br></br>
            <h6 id="grad-explination-text">
              Resume bias is a well documented occurrence. It refers to the prejudice for or against a candidates resume based on characteristics inferred from the document. These characteristics might include the candidates name, age, gender, interests, ethnicity, social status, appearance, or any other characteristic a hiring professional might derive an inference from unintentionally.

              In an effort to meet the needs of a growing tech marketplace requiring new talent, perspective, ideas and diversity we have created a 'blind' unbiased resume source. Here randomized candidates can provide raw data to be evaluated upon without many of the naturally occurring biases present in a traditional resume.
            </h6>
            <Link to='/talents' className='landing-talent-button'>Talent</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
