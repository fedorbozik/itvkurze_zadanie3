import React from 'react';
import { render } from "react-dom";
import './index.css';
import Game from './Game';
/*import Names from './Game';*/
import registerServiceWorker from './registerServiceWorker';

render(
    <Game />,
    document.getElementById('root'));
registerServiceWorker();
