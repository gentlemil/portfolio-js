import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

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
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }

}

export default App;
