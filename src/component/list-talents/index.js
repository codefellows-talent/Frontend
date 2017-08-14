import React from 'react';
import TalentItem from '../talent-item';

class ListTalents extends React.Component {
  render () {
    return (
      <div className="list-talents">
        <div>
          <p>Profiles Selected: #</p>
          <button onSubmit={() => {}}>Connect Me!</button>
        </div>
        <TalentItem />
      </div>
    );
  }
}

export default ListTalents;
