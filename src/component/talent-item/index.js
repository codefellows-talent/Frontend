import '../../style/_talent-item.scss';
import React from 'react';

class TalentItem extends React.Component {
  render () {
    return (
      <div className='talent-item'>
        <h4>Nickname</h4>
        <p>Tagline Tagline Taglin Taglinee<span>icons go here</span></p>
        <p>Employment Tagline Previously</p>
        <p>Additional Education</p>
        <p>Current Title if in Field</p>
        <p>Skills and Tools</p>
        <p>Seeking: Fulltime, Parttime, Apprentice</p>
        <p>Not willing to relocate</p>
        <button className="add-button" onClick={() => {}}>Add</button>
      </div>
    );
  }
}

export default TalentItem;
