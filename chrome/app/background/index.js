require('expose?$!expose?jQuery!jquery');
import _ from 'lodash';
import './bullet';
import {settings} from '../settings';

var messages = {'opened': [], 'started': []};

window.messages = messages;

const helpers = {
  deleteMessage: (type, msg) => {
    messages[type] = _.reject(messages[type], {id: msg.id});
  },

  clearMessages: () => {
    messages = {'opened': [], 'started': []};
  },

  addMessage: (type, msg) => {
    messages[type] = messages[type].concat(msg);
  },

  setBadgeText: () => {
    // NOTE Можно не пересчитывать каждый раз полностью.
    const msgCount = messages['opened'].length + messages['started'].length;
    let text = '';
    if (msgCount > 0) {
      text += msgCount;
    }
    chrome.browserAction.setBadgeText({text: text});
    console.warn(messages);
  }
};

const handlers = {
  openGame: (msg) => {
    helpers.addMessage('opened', msg);
  },

  startGame: (msg) => {
    helpers.deleteMessage('opened', msg);
    helpers.addMessage('started', msg);
  },

  finishGame: (msg) => {
    if (!helpers.deleteMessage('started', msg)) {
      helpers.deleteMessage('opened', msg);
    }
  }
};

$(() => {
  establish_connection = () => {
    const bullet = $.bullet(settings.api_call);
    bullet.onopen = () => {
      console.log('bullet: opened');
      helpers.clearMessages();
      helpers.setBadgeText();
    };

    bullet.ondisconnect = () => {
      console.log('bullet: disconnected');
      helpers.clearMessages();
      helpers.setBadgeText();
    };

    bullet.onclose = () => {
      console.log('bullet: closed');
      helpers.clearMessages();
      helpers.setBadgeText();
    };

    bullet.onmessage = (e) => {
      let response = $.parseJSON(e.data);
      handlers[response.handler](response.data);
      helpers.setBadgeText();
    };

    bullet.onheartbeat = () => {
      bullet.send('ping');
    };
  }();
});
