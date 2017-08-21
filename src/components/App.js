import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
