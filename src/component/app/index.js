import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../header';
import LandingContainer from '../landing-container';
import Footer from '../footer';
import ListTalents from '../list-talents';
import ContactForm from '../contact-form';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingContainer}/>
            <Route exact path='/talents' component={ListTalents} />
            <Route exact path ='/contact' component={ContactForm} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
