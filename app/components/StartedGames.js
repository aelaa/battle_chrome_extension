import React, { Component } from 'react';

export default class StartedGames extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {messages: []}
    StartedGames.context = this;
  }

  componentWillMount() {
    this.getMessagesFromServer.apply(this);
    setInterval(this.getMessagesFromServer.bind(this), 500);
  }

  getMessagesFromServer() {
    let messages = chrome.extension.getBackgroundPage().messages;
    console.warn(messages);
    this.setState({messages: messages[this.props.type]});
  }

  render () {
    const messages = this.props.messages;
    return (
      <dl>
        <dt><h4>Started games <span className='badge'>{messages.length}</span></h4></dt>
        {messages.length > 0 ?
          messages.map(function(message) {
          href = settings.host + '/games/' + message.id;
          nicknames = _.pluck(message.players, 'nickname');
          playerLangs = _.pluck(message.players, 'lang');

          return (
            <dd>
              <span>{playerLangs.join('/')} : </span>
              <a href={href} target='_blank' className='game-link'>
                {nicknames.join(' vs ')}
              </a>
            </dd>
            );
        }, this)
          : ''
        }
      </dl>
    );
  }
};

export default StartedGames;
