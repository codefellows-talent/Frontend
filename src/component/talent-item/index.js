import '../../style/_talent-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../action/profile-actions.js';

class TalentItem extends React.Component {
  constructor (props) {
    super(props);

    this.handleUpdateSelected = this.handleUpdateSelected.bind(this);
  }

  handleUpdateSelected (profile) {
    profile.selected = !profile.selected;
    this.props.profileUpdate(profile);
  }

  render () {
    let {profile} = this.props;

    let relocation = profile.relocation ? 'Willing to Relocate' : false;
    let fulltime = profile.employmentTypes.fullTime ? 'Full-Time ' : false;
    let parttime = profile.employmentTypes.partTime ? 'Part-Time ' : false;
    let apprenticeship = profile.employmentTypes.apprentice ? 'Apprentice ' : false;
    let internship = profile.employmentTypes.internship ? 'Internship ' : false;
    let freelance = profile.employmentTypes.freelance ? 'Freelance ' : false;
    let notLooking = (!fulltime && !parttime && !apprenticeship && !internship && !freelance)? 'false' : 'Not currently looking at ';

    let imageAssign = {
      'JavaScript': 'javascript.png',
      'Python': 'python.png',
      'IOS-Swift': '',
      'iOS-Objective C': 'objective-c.png',
      'C# .NET': 'c#.jpg',
      'Android - Java': 'android.png',
      'Java': 'java.png',
      'Angular': 'angular.png',
      'React': 'react.png',
      'React Native': 'react-native.png',
      'HTML and CSS': 'html.png',
      'SQL': 'sql.png',
      'C or C++': 'c++.png',
      'Git': 'git.png',
      'GitHub': 'github.png',
      'Mongo': 'mongodb.png',
      'Node.JS': 'nodejs.png',
      'Travis Cl': 'travis.png',
      'AWS': 'aws.png',
      'Azure': 'azure.png',
      'Google Cloud Services': 'google-cloud.png',
      'Atom': 'atom.png',
      'Vim': 'vim.jpg',
      'Emacs': '',
    };

    // let imageURL = require(`${__dirname}/../../style/assets/icons/${imageAssign[profile.skills.top]}`);
    // console.log('imageURL', imageURL);
    return (
      <div className='talent-item'>
        <h5>{profile.nickname}</h5>
        <p>
          {profile.tools.top}
        </p>
        <p>{profile.tagline}</p>
        <p>{profile.employer}</p>
        <p>{profile.coursework}</p>
        <p>{profile.careerTagline}</p>
        <p>{profile.location}</p>
        <p>{profile.graduationDate}</p>
        <p>{profile.codefellowsCourse}</p>
        <p>{relocation}</p>

        <p>Good Skills: {profile.skills.good.map((item) => `${item}  `)}</p>
        <p>Skills to Learn: {profile.skills.learn.map((item) => `${item}  `)}</p>
        <p>Looking for: {fulltime}{parttime}{apprenticeship}{internship}{freelance}opportunities! </p>
        <p>{profile.tools.good.map((item) => `${item}  `)}</p>
        <p>{profile.tools.learn.map((item) => `${item}  `)}</p>
        <p>{profile.roles.top}</p>
        <p>{profile.roles.other.map((item) => `${item}  `)}</p>

        <button className="add-button" onClick={() => this.handleUpdateSelected(profile)}>
          {profile.selected ? 'Remove' : 'Add'}
        </button>
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
