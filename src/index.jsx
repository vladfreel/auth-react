import React from 'react';
import { render } from 'react-dom';

import { App } from './App/App';

// setup fake backend
import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();

render(
    <App />,
    document.getElementById('app')
);