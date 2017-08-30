import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Bandwith from './Bandwith';
import Fridgr from './Fridgr';
import Tribal from './Tribal';
import Rocket from './Rocket';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Projects}/>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Bandwith" component={Bandwith} />
            <Route path="/Fridgr" component={Fridgr} />
            <Route path="/Tribal" component={Tribal} />
            <Route path="/Rocket" component={Rocket} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
