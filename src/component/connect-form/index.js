import React from 'react';
import TalentItem from '../talent-item';

class ConnectForm extends React.Component {
  render () {
    return (
      <div>
        <form className='connect-form' onSubmit='' >
          <input
            name='name'
            type='text'
            value=''
            onChange=''
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            value=''
            onChange=''
            placeholder='Email'
          />
          <input
            name='company'
            type='text'
            value=''
            onChange=''
            placeholder='Company'
          />
          <input
            name='terms-of-use'
            type='checkbox'
            value='unchecked'
            onChange=''
          />Terms of Use
          <button type='submit'>Connect Me!</button>
        </form>
        <TalentItem />
      </div>
    );
  }
}

export default ConnectForm;
