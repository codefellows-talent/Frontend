import '../../style/_list-talents.scss';
import React from 'react';
import TalentItem from '../talent-item';
import {connect} from 'react-redux';
import * as profileActions from '../../action/profile-actions.js';

class ListTalents extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchProfile();
  }

  render () {
    return (
      <div className="list-talents">
        <div>
          <p>Profiles Selected: #</p>
          <button className="connect-button" onSubmit={() => {}}>Connect Me!</button>
        </div>
        
        {this.props.profiles.map(studentProfile => {
          return <TalentItem key={studentProfile.salesforceId} onUpdate={this.props.profileUpdate} profile={studentProfile}/>;
        })}
      </div>
    );
  }
}

// export default ListTalents;


let mapStateToProps = (state) => ({
  profiles: state.profiles,
});

let mapDispatchToProps = (dispatch) => ({
  profileUpdate: (profile) => dispatch(profileActions.profileUpdate(profile)),
  fetchProfile: () => dispatch(profileActions.profilesFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTalents);

