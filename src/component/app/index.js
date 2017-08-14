import React from 'react';
import {connect} from 'react-redux';
import {MemoryRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <p>potato</p>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
