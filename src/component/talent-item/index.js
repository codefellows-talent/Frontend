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
      'JavaScript': 'https://s3.amazonaws.com/codefellows-hiring-partners/javascript.png',
      'Python': 'https://s3.amazonaws.com/codefellows-hiring-partners/python.png',
      'IOS-Swift': 'https://s3.amazonaws.com/codefellows-hiring-partners/swift-logo.png',
      'iOS-Objective C': 'https://s3.amazonaws.com/codefellows-hiring-partners/objective-c.png',
      'C# .NET': 'https://s3.amazonaws.com/codefellows-hiring-partners/c%23.jpg',
      'Android - Java': 'https://s3.amazonaws.com/codefellows-hiring-partners/android.png',
      'Java': 'https://s3.amazonaws.com/codefellows-hiring-partners/java.png',
      'Angular': 'https://s3.amazonaws.com/codefellows-hiring-partners/angular.png',
      'React': 'https://s3.amazonaws.com/codefellows-hiring-partners/react.png',
      'React Native': 'https://s3.amazonaws.com/codefellows-hiring-partners/react-native.png',
      'HTML and CSS': 'https://s3.amazonaws.com/codefellows-hiring-partners/html5-css3_icon.jpg',
      'SQL': 'https://s3.amazonaws.com/codefellows-hiring-partners/sql.png',
      'C or C++': 'https://s3.amazonaws.com/codefellows-hiring-partners/c%2B%2B.png',
      'Git': 'https://s3.amazonaws.com/codefellows-hiring-partners/git.png',
      'GitHub': 'https://s3.amazonaws.com/codefellows-hiring-partners/github.png',
      'Mongo': 'https://s3.amazonaws.com/codefellows-hiring-partners/mongodb.png',
      'Node.JS': 'https://s3.amazonaws.com/codefellows-hiring-partners/nodejs.png',
      'Travis Cl': 'https://s3.amazonaws.com/codefellows-hiring-partners/travis.png',
      'AWS': 'https://s3.amazonaws.com/codefellows-hiring-partners/aws.png',
      'Azure': 'https://s3.amazonaws.com/codefellows-hiring-partners/azure.png',
      'Google Cloud Services': 'https://s3.amazonaws.com/codefellows-hiring-partners/google-cloud.png',
      'Atom': 'https://s3.amazonaws.com/codefellows-hiring-partners/atom.png',
      'Vim': 'https://s3.amazonaws.com/codefellows-hiring-partners/vim.jpg',
      'Emacs': 'https://s3.amazonaws.com/codefellows-hiring-partners/Emacs-icon.png',
      'Bash':'https://s3.amazonaws.com/codefellows-hiring-partners/bash.png',
      'Redux': 'https://s3.amazonaws.com/codefellows-hiring-partners/redux.png',
    };

    // let imageURL = require(`${__dirname}/../../style/assets/icons/${imageAssign[profile.skills.top]}`);
    // console.log('imageURL', imageURL);
    return (
      <div className='talent-item'>
        <h5>{profile.nickname}</h5>
        <img src={imageAssign[profile.skills.top]}></img>
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
