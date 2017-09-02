import '../../style/_landing-container.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class LandingContainer extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  
  render () {
    return (
      <div>
        <div className='hero-container'>
          <img className='hero-image' src='https://s3.amazonaws.com/codefellows-hiring-partners/helloquence-61189.jpg' />
          <div className='hero-text'>
            <h1>Graduate Hiring</h1>
            <h6>Unbiased Resumes to Identify Qualified Candidates</h6>
          </div>
        </div>

        <div className='students'>
          <div className='student-container'>
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/saul.jpg' />
            <p>Full Stack <span>Javascript</span> Developer<span>, with a focus in UI/UX design</span></p>
            <h5>Saul Greene</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className='student-container'>
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/felix.png' />
            <p>Full Stack <span>Javascript</span> Developer<span>, with a focus in backend development</span></p>
            <h5>Ryan Felix</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className='student-container'>
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/nicu.png' />
            <p>FullStack Developer<span> that loves DevOps</span></p>
            <h5>Nicu Parente</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
          <div className='student-container'>
            <img className='grad-pics' src='https://s3.amazonaws.com/codefellows-hiring-partners/michael.jpeg' />
            <p>Full Stack <span>Javascript </span>developer<span>, with experience in Ruby on Rails.</span></p>
            <h5>Michael Porter</h5>
            <h6>Current Code Fellows Student</h6>
          </div>
        </div>

        <div className='hero-container'>
          <img className='hero-bottom-image' src='https://s3.amazonaws.com/codefellows-hiring-partners/Screen+Shot+2017-08-14+at+11.27.09+PM.png' />
          <div className='hero-bottom-background'>
            <div className='hero-bottom-text'>
              <h1>Take a Look</h1>
              <h6>
                Resume bias is a well documented occurrence. It refers to the prejudice for or against a candidates resume based on characteristics inferred from the document. These characteristics might include the candidates name, age, gender, interests, ethnicity, social status, appearance, or any other characteristic a hiring professional might derive from unintentionally from a resume.
              </h6>
              <h6>
                In an effort to meet the needs of a growing tech marketplace requiring new talent, perspective, ideas and diversity we have created a 'blind' unbiased resume source. Here randomized candidates can provide raw data to be evaluated upon without many of the biases present in a traditional resume.
              </h6>
              <br />
              <Link to='/talents' className='landing-talent-button'>Talent</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
