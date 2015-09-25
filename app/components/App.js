import React, { Component } from 'react';
import StartedGames from './StartedGames';
import OpenedGames from './OpenedGames';

export default class App extends Component {
  // componentWillMount() {
  //   function getMessagesFromServer() {
  //     let messages = chrome.extension.getBackgroundPage().messages;
  //     // this.setState({messages: messages[this.props.type]});
  //   }
  //   getMessagesFromServer();
  //   setInterval(getMessagesFromServer, 500);
  // }

  render() {
    const settings = this.props.settings;
    return (
      <div className='container'>
        <ul className='nav nav-tabs'>
          <li className='active'>
            <a href='#'>
              games
            </a>
          </li>
          <li>
            <a href='#'>
              profile
            </a>
          </li>
          <li>
            <a href={settings.host} target='_blank'>
              {settings.host}
            </a>
          </li>
        </ul>
        <div className='row'>
          <div className='col-xs-12'>
            <div id='opened_games'>
              <OpenedGames messages={[]} />
            </div>
          </div>
          <div className='col-xs-12'>
            <div id='started_games'>
              <StartedGames messages={[]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
