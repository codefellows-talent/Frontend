import '../../style/_talent-item.scss';
import React from 'react';

class TalentItem extends React.Component {
  constructor(props){
    super(props);
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
        <button className="add-button" onClick={this.props.updateSelected}>Add</button>
      </div>
    );
  }
}

export default TalentItem;
