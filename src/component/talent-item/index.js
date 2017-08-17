//import '../../style/_talent-item.scss';
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

    // handle skills and tools
    let imageAssign = {
      'JavaScript': `${__AWS_S3_BUCKET__}/javascript.png`,
      'Python': `${__AWS_S3_BUCKET__}/python.png`,
      'IOS-Swift': `${__AWS_S3_BUCKET__}/swift-logo.png`,
      'iOS-Objective C': `${__AWS_S3_BUCKET__}/objective-c.png`,
      'C# .NET': `${__AWS_S3_BUCKET__}/c%23.jpg`,
      'Android - Java': `${__AWS_S3_BUCKET__}/android.png`,
      'Java': `${__AWS_S3_BUCKET__}/java.png`,
      'Front-end Web Development': `${__AWS_S3_BUCKET__}/frontend.jpg`,
      'Backend Development': `${__AWS_S3_BUCKET__}/backend.png`,
      'Unit Testing': `${__AWS_S3_BUCKET__}/unittesting.png`,
      'Build automation': `${__AWS_S3_BUCKET__}/buildauto.png`,
      'Angular': `${__AWS_S3_BUCKET__}/angular.png`,
      'React': `${__AWS_S3_BUCKET__}/react.png`,
      'React Native': `${__AWS_S3_BUCKET__}/react-native.png`,
      'HTML and CSS': `${__AWS_S3_BUCKET__}/html5-css3_icon.jpg`,
      'SQL': `${__AWS_S3_BUCKET__}/sql.png`,
      'Relational Database Design': '',
      'Dev-Ops': `${__AWS_S3_BUCKET__}/devops.jpg`,

      'C or C++': `${__AWS_S3_BUCKET__}/c%2B%2B.png`,
      'Shell Scripting (e.g. BASH)': `${__AWS_S3_BUCKET__}/bash.png`,
      'Git': `${__AWS_S3_BUCKET__}/git.png`,
      'GitHub': `${__AWS_S3_BUCKET__}/github.png`,
      'Mongo': `${__AWS_S3_BUCKET__}/mongodb.png`,
      'Node.JS': `${__AWS_S3_BUCKET__}/nodejs.png`,
      'Travis CI': `${__AWS_S3_BUCKET__}/travis.png`,
      'AWS': `${__AWS_S3_BUCKET__}/aws.png`,
      'Azure': `${__AWS_S3_BUCKET__}/azure.png`,
      'Google Cloud Services': `${__AWS_S3_BUCKET__}/google-cloud.png`,
      'Atom': `${__AWS_S3_BUCKET__}/atom.png`,
      'Vim': `${__AWS_S3_BUCKET__}/vim.jpg`,
      'Emacs': `${__AWS_S3_BUCKET__}/Emacs-icon.png`,
    };

    let imageOrText = (key) => imageAssign[key] ? <img className="talent-icon" src={imageAssign[key]}/> : <span>{imageAssign[key]}</span>;

    let mapImageOrText = (objectKey) => objectKey.map((item, i) => imageAssign[item] ? <img className="talent-icon" key={i} src={imageAssign[item]}/> : <span key={i}>{item}</span>);


    return (
      <div className='talent-item'>
        <h5>{profile.nickname}</h5>
        {imageOrText(profile.skills.top)}
        {imageOrText(profile.tools.top)}
        <p>{profile.tagline}</p>
        <p>{profile.employer}</p>
        <p>{profile.coursework}</p>
        <p>{profile.careerTagline}</p>
        <p>{profile.location}</p>
        <p>{profile.graduationDate}</p>
        <p>{profile.codefellowsCourse}</p>
        <p>{relocation}</p>
        <p>Looking for: {fulltime}{parttime}{apprenticeship}{internship}{freelance}opportunities! </p>
        <p>{profile.roles.top}</p>
        <p>{profile.roles.other.map((item) => `${item}  `)}</p>
        <p>Skills to Learn: {mapImageOrText(profile.skills.learn)} End skills to learn</p>
        <p>Good Skills: {mapImageOrText(profile.skills.good)}end good skills</p>
        <p>tools good{mapImageOrText(profile.tools.good)}end tools good</p>
        <p>tools learn{mapImageOrText(profile.tools.learn)}end tools learn</p>

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
