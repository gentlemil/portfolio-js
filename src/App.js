import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from 'react-scroll-up';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    }
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route component={About} path='/about' />
            <Route component={Resume} path='/resume' />
            <Route component={Projects} path='/projects' />
            <Route component={Contact} path='/contact' />
            <Route component={Home} exact path='/' />
          </Switch>
        </Router>
        <Footer />
        <ScrollToTop showUnder={160} style={{ backgroundColor: 'white' }}>
          <div className='scroll-up'><i class="fas fa-caret-up"></i></div>
        </ScrollToTop>
      </div>
    );
  }

}

export default App;
