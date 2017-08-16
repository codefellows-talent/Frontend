import '../../style/_talent-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../action/profile-actions.js';

class TalentItem extends React.Component {
  constructor (props) {
    super(props);

    this.handleUpdateSelected = this.handleUpdateSelected.bind(this);
  }

<<<<<<< HEAD
=======
  handleUpdateSelected (profile) {
    profile.selected = !profile.selected;
    this.props.profileUpdate(profile);
  }
>>>>>>> 5572a07b70aa1f195b2e94f187db618cd6c13820

  render () {
    let {profile} = this.props;
    return (
      <div className='talent-item'>
        <h4>{profile.nickname}</h4><span>     icons go here</span>
        <p>{profile.tagline}</p>
        <p>{profile.employer}</p>
        <p>{profile.coursework}</p>
        <p>{profile.careerTagline}</p>
<<<<<<< HEAD
        <p>Skills and Tools</p>
        <p>Seeking: Fulltime, Parttime, Apprentice</p>
        <p>Not willing to relocate</p>
        <button className="add-button" onClick={()=>{}}>Add</button>
=======
        <button className="add-button" onClick={() => this.handleUpdateSelected(profile)}>
          {profile.selected ? 'Remove' : 'Add'}
        </button>
>>>>>>> 5572a07b70aa1f195b2e94f187db618cd6c13820
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profiles: state.profiles,
});

let mapDispatchToProps = (dispatch) => ({
  profileUpdate: (profile) => dispatch(profileActions.profileUpdate(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TalentItem);
