import '../../style/_connect-form.scss';
import React from 'react';
import superagent from 'superagent';
import {connect} from 'react-redux';

import TalentItem from '../talent-item';

class ConnectForm extends React.Component {
  constructor (props) {
    super(props);
    let selected = [];
    props.profiles.forEach(profile => profile.selected ? selected.push(profile.salesforceId): null);

    this.state = {
      name:'',
      email:'',
      company:'',
      ids: selected,
      terms: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.name === 'terms'){
      this.setState({ terms: !this.state.terms });
    }
    else
      this.setState({[event.target.name]: event.target.value});

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    superagent.post(`${__API_URL__}/api/v1/connect`)
      .send({
        email: this.state.email,
        ids: this.state.ids,
        name: this.state.name,
        terms: this.state.terms,
        company: this.state.company,
      })
      .then(res =>{
        console.log(res);
      })
      .catch(err =>{
        console.error(err);
      });
  }

  render () {
    return (
      <div>
        <form className='connect-form' onSubmit={this.handleSubmit} >
          <input
            name='name'
            type='text'
            maxlength='255'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            maxlength='255'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='Email'
          />
          <input
            name='company'
            type='text'
            maxLength='255'
            value={this.state.company}
            onChange={this.handleChange}
            placeholder='Company'
          />
          <div>
            <input id="checkbox"
              name='terms'
              type='checkbox'
              value={this.state.terms}
              onChange={this.handleChange}
            /> <p id="checkbox-text">Terms of Use</p>
          </div>
          <button className="connect-button-submit" type='submit'>Connect Me!</button>
        </form>

        {
          this.props.profiles.map(profile =>{
            if(profile.selected)
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
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectForm);
