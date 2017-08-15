import '../../style/_connect-form.scss';
import React from 'react';
import TalentItem from '../talent-item';

class ConnectForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = props.category ? {...props.category} : {title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete({...this.state});

    if(!this.props.category)
      this.setState({title: ''});


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
            onChange={this.state.handleChange}
            placeholder='Email'
          />
          <input
            name='company'
            type='text'
            maxLength='255'
            value={this.state.company}
            onChange={this.state.handleChange}
            placeholder='Company'
          />
          <div>
            <input id="checkbox"
              name='terms-of-use'
              type='checkbox'
              value={this.state.terms}
              onChange={this.state.handleChange}
            /> <p id="checkbox-text">Terms of Use</p>
          </div>
          <button className="connect-button-submit" type='submit'>Connect Me!</button>
        </form>
        <div className="list-talents">
          <TalentItem />
        </div>
      </div>
    );
  }
}

export default ConnectForm;
