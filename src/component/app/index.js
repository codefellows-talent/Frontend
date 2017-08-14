import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../header';
import LandingContainer from '../landing-container';
import Footer from '../footer';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={LandingContainer}/>
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
