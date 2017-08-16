import '../../style/_talent-item.scss';
import React from 'react';

class TalentItem extends React.Component {
  constructor(props){
    super(props);
  }

  handleUpdateSelected(profile){
    this.props.handleUpdateSelected(profile);
  }

  render () {
    let {profile} = this.props;
    return (
      <div className='talent-item'>
        <h4>{profile.nickname}</h4>
        <p>{profile.tagline}<span>icons go here</span></p>
        <p>{profile.employer}</p>
        <p>{profile.coursework}</p>
        <p>{profile.careerTagline}</p>
        <p>Skills and Tools</p>
        <p>Seeking: Fulltime, Parttime, Apprentice</p>
        <p>Not willing to relocate</p>
        <button className="add-button" onClick={handleUpdateSelected(profile)}>Add</button>
      </div>
    );
  }
}

export default TalentItem;
