import React from 'react';
import { Link } from 'react-router-dom';

class LandingContainer extends React.Component{

  render(){
    return(
      <div>
        <img className='landing-hero' src='https://s3.amazonaws.com/401-hire-cf/pexels-photo.jpg'/>
        <div className='graduate-image-container'>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
          <div className='graduate-image'></div>
        </div>
        <div >
          <div className='landing-statement'>
              Bacon ipsum dolor amet burgdoggen tongue tri-tip, chicken salami turkey short ribs rump meatball drumstick tail shank pancetta. Frankfurter turkey andouille hamburger tongue brisket venison porchetta pork chop picanha ribeye tri-tip tenderloin alcatra. Ham beef bresaola tenderloin, corned beef frankfurter capicola turkey meatloaf salami ham hock ground round meatball sirloin venison. Boudin chicken turkey jowl beef ribs. Brisket chicken doner jerky. Pancetta ball tip short loin, fatback tail corned beef flank. Frankfurter shoulder cupim, strip steak filet mignon shankle alcatra.
          </div>
          <Link to='/talents' className='landing-talent-button'>Talent</Link>
        </div>
      </div>
    );
  }
}

export default LandingContainer;
