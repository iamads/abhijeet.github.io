import React, { Component } from 'react';
import './App.css';
import Faenvelope from 'react-icons/lib/fa/envelope-o';
import Fagithub from 'react-icons/lib/fa/github';
import Falinkedin from 'react-icons/lib/fa/linkedin-square';

class App extends Component {
  render() {
    return (
      <div className="contact">
        <div>
          <Faenvelope /> | me@abhijeet.de
        </div>
        <div className="urls"> 
          <span><a target="_blank" href="https://github.com/iamads"><Fagithub /></a></span>
          <span><a target="_blank" href="https://www.linkedin.com/in/abhijeet-de"><Falinkedin /></a></span>
        </div> 
      </div>
    );
  }
}

export default App;
