import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../header';
import LandingContainer from '../landing-container';
import Footer from '../footer';
import ListTalents from '../list-talents';
import ConnectForm from '../connect-form';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <BrowserRouter onUpdate={scrollTop}>
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
