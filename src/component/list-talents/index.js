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
    return (
      <div>
        <h1 id='the-talent'>The Talent</h1>
        <img className='landing-hero-3' src='https://s3.amazonaws.com/codefellows-hiring-partners/craig-garner-202.jpg'/>
        <div className="list-talents">
          <div>
            <p>Profiles Selected: {this.handleCountSelected(this.props.profiles)}</p>
            <Link to='/connect' className='connect-me-button'>Connect Me!</Link>
          </div>

          {this.props.profiles.map(studentProfile => {
            return <TalentItem key={studentProfile.salesforceId} profile={studentProfile}/>;
          })}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>Profiles Selected: {this.handleCountSelected(this.props.profiles)}</p>
          <Link to='/connect' className='connect-me-button'>Connect Me!</Link>
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
