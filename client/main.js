// import './form.html';
// import './form.js';
// import './hello.html';
// import './peopleDB';
// import './main.html';2.3  Replace starter JS client/main.js »
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './App.jsx';


Meteor.startup(() => {
    render(<App />,  document.getElementById('react-target'));
});