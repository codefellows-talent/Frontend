import '../../style/_connect-form.scss';
import React from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        localStorage.setItem('contacted',JSON.stringify(this.state));
       
        this.props.profiles.forEach(profile =>{
          if(this.state.ids.includes(profile.salesforceId)){
            profile.contacted = true;
            this.props.profileUpdate(profile);
          }
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="connect-container">
        <h1 id='connect'>Connect</h1>
        <img className='landing-hero-3' src='https://s3.amazonaws.com/codefellows-hiring-partners/freddy-castro-133328.jpg'/>
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
              value={this.state.terms}
              onChange={this.handleChange}
            /> <p id="checkbox-text">Terms of Use</p>
          </div>
          <button className="connect-button-submit" type='submit'>Connect Me!</button>
        </form>

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
