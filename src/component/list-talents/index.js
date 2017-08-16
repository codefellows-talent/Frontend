import '../../style/_list-talents.scss';
import React from 'react';
import TalentItem from '../talent-item';
import {connect} from 'react-redux';
import * as profileActions from '../../action/profile-actions.js';

class ListTalents extends React.Component {
  constructor (props) {
    super(props);

    this.handleUpdateSelected = this.handleUpdateSelected.bind(this);
    this.handleCountSelected = this.handleCountSelected.bind(this);
  }

  handleUpdateSelected (profile){
    console.log('car');
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
      <div className="list-talents">
        <div>
          <p>Profiles Selected: {this.handleCountSelected(this.props.profiles)}</p>
          <button className="connect-button" onSubmit={() => {}}>Connect Me!</button>
        </div>

        {this.props.profiles.map(studentProfile => {
          return <TalentItem key={studentProfile.salesforceId} updateSelected={this.handleUpdateSelected} profile={studentProfile}/>;
        })}
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
