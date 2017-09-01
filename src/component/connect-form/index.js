import '../../style/_connect-form.scss';
import React from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import * as util from '../../lib/util.js';
import * as profileActions from '../../action/profile-actions.js';
import TalentItem from '../talent-item';

class ConnectForm extends React.Component {
  constructor(props) {
    super(props);
    let selected = [];
    props.profiles.forEach(profile => profile.selected ? selected.push(profile.salesforceId) : null);
    this.state = {
      name: '',
      email: '',
      company: '',
      ids: selected,
      terms: false,
      modalIsOpen: false,
      successfullyConnected: false,
      connectAttempt: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange(event) {
    if (event.target.name === 'terms') {
      this.setState({ terms: !this.state.terms });
    }
    else
      this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    superagent.post(`${__API_URL__}/api/v1/connect`)
      .send({
        email: this.state.email,
        ids: this.state.ids,
        name: this.state.name,
        terms: this.state.terms,
        company: this.state.company,
      })
      .then(res => {
        let localStorageJSON = JSON.parse(localStorage.getItem('contacted'));
        let localStorageIds = [];
        if (localStorageJSON)
          localStorageIds = localStorageJSON.ids;
        this.setState({
          ids: localStorageIds.concat(this.state.ids),
          successfullyConnected: true,
          connectAttempt: this.state.connectAttempt++,
        });
        localStorage.setItem('contacted', JSON.stringify(this.state));
        this.props.profiles.forEach(profile => {
          if (this.state.ids.includes(profile.salesforceId)) {
            profile.contacted = true;
            this.props.profileUpdate(profile);
          }
        });
      })
      .catch(err => {
        this.setState({ successfullyConnected: false });
        this.setState({ connectAttempt: this.state.connectAttempt++ });

        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div className='hero-container'>
          <img className='hero-image' src='https://s3.amazonaws.com/codefellows-hiring-partners/freddy-castro-133328.jpg' />
          <div className='hero-text'>
            <h1>Connect</h1>
          </div>
        </div>
        {
          (() => {
            if(!this.state.successfullyConnected && this.state.connectAttempt === 0)
              return <h3 className="contact-form-header">Contact Form:</h3>;
            else if (this.state.successfullyConnected)
              return <h3 className="contact-form-header">You have successfully connected to {this.state.ids.length} Graduates!</h3>;
            else if(!this.state.successfullyConnected && this.state.connectAttempt > 0)
              return <h3 className="contact-form-header">Failed to connect. Please try again later</h3>;
          })()
        }
        <form className='connect-form' onSubmit={this.handleSubmit} >
          <input
            name='name'
            type='text'
            maxLength='255'
            required
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            required
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <input
            name='company'
            type='text'
            required
            maxLength='255'
            value={this.state.company}
            onChange={this.handleChange}
            placeholder='Company'
          />
          <div>
            <input id="checkbox"
              name='terms'
              type='checkbox'
              required
              onInvalid='this.setCustomValidity("You need to agreee to the Terms of Use");'
              value={this.state.terms}
              onChange={this.handleChange}
            /> <p id="checkbox-text" onClick={this.openModal}>Terms of Use</p>
          </div>
          <button className="connect-button-submit" type='submit'>Connect Me!</button>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='terms-and-conditions'
        >
          <h4 className='modal-header'>Terms and Conditions:</h4>
          <div className='modal-content'>
            Bacon ipsum dolor amet strip steak brisket flank, turducken kielbasa biltong boudin. Meatloaf biltong cupim ribeye hamburger landjaeger short ribs. Bacon frankfurter corned beef capicola ball tip jerky cow strip steak pork belly. Fatback corned beef meatloaf chicken. Prosciutto frankfurter short loin, meatball fatback jowl leberkas flank ham hock pork belly swine tail salami. Swine bresaola chicken sausage pancetta jerky salami hamburger shoulder corned beef bacon ball tip drumstick andouille. Rump pork loin pastrami brisket. Bacon ipsum dolor amet strip steak brisket flank, turducken kielbasa biltong boudin. Meatloaf biltong cupim ribeye hamburger landjaeger short ribs. Bacon frankfurter corned beef capicola ball tip jerky cow strip steak pork belly. Fatback corned beef meatloaf chicken. Prosciutto frankfurter short loin, meatball fatback jowl leberkas flank ham hock pork belly swine tail salami. Swine bresaola chicken sausage pancetta jerky salami hamburger shoulder corned beef bacon ball tip drumstick andouille. Rump pork loin pastrami brisket. Bacon ipsum dolor amet strip steak brisket flank, turducken kielbasa biltong boudin. Meatloaf biltong cupim ribeye hamburger landjaeger short ribs. Bacon frankfurter corned beef capicola ball tip jerky cow strip steak pork belly. Fatback corned beef meatloaf chicken. Prosciutto frankfurter short loin, meatball fatback jowl leberkas flank ham hock pork belly swine tail salami. Swine bresaola chicken sausage pancetta jerky salami hamburger shoulder corned beef bacon ball tip drumstick andouille. Rump pork loin pastrami brisket. Bacon ipsum dolor amet strip steak brisket flank, turducken kielbasa biltong boudin. Meatloaf biltong cupim ribeye hamburger landjaeger short ribs. Bacon frankfurter corned beef capicola ball tip jerky cow strip steak pork belly. Fatback corned beef meatloaf chicken. Prosciutto frankfurter short loin, meatball fatback jowl leberkas flank ham hock pork belly swine tail salami. Swine bresaola chicken sausage pancetta jerky salami hamburger shoulder corned beef bacon ball tip drumstick andouille. Rump pork loin pastrami brisket.
          </div>
          <button className='close-button' onClick={this.closeModal}>CLOSE</button>
        </Modal>
        <h5>Selected Profiles to be contacted:</h5>
        {
          this.props.profiles.map(profile => {
            if (profile.selected)
              return <TalentItem key={profile.salesforceId} profile={profile} />;
            else
              return;
          })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectForm);
