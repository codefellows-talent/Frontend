'use strict';

import '../../style/_list-talents.scss';
import React from 'react';
import TalentItem from '../talent-item';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../../action/profile-actions.js';

class ListTalents extends React.Component {
  constructor (props) {
    super(props);

    this.handleCountSelected = this.handleCountSelected.bind(this);
  }

  handleCountSelected (profiles) {
    let count = 0;
    profiles.map((item) => {
      if(item.selected)
        count ++;
    });
    return count;
  }

  componentWillMount(){
    this.props.fetchProfile();
  }

  render () {
    let connectBox = document.getElementsByClassName('connect-container');
    return (
      <div>
        <div className='hero-container'>
          <img className='hero-image' src='https://s3.amazonaws.com/codefellows-hiring-partners/craig-garner-202.jpg'/>
          <div className='hero-text'>
            <h1>The Talent</h1>
          </div>
          <div className='connect-container'>
            <p>Profiles Selected: {this.handleCountSelected(this.props.profiles)}</p>
            <Link to='/connect' className='connect-button'>Connect Me!</Link>
          </div>
        </div>
        <div className="list-talents">
          {this.props.profiles.map(studentProfile => {
            return <TalentItem key={studentProfile.salesforceId} profile={studentProfile}/>;
          })}
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profiles: state.profiles,
});

let mapDispatchToProps = (dispatch) => ({
  profileUpdate: (profile) => dispatch(profileActions.profileUpdate(profile)),
  fetchProfile: () => dispatch(profileActions.profilesFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTalents);
