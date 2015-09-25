require('expose?$!expose?jQuery!jquery');
require('expose?React!react');
require('../../assets/stylesheets/application.css');
require('bootstrap/dist/css/bootstrap.min.css');

import {settings} from '../settings'
import App from '../../../app/components/App';
import ReactDOM from 'react-dom';

$(() => {
  ReactDOM.render(<App settings={settings} />, $('#app')[0]);
});
