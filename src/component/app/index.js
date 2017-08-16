import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../header';
import LandingContainer from '../landing-container';
import Footer from '../footer';
import ListTalents from '../list-talents';
import ConnectForm from '../connect-form';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingContainer}/>
            <Route exact path='/talents' component={ListTalents} />
            <Route exact path ='/connect' component={ConnectForm} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;