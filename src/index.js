import React from 'react'
import ReactDOM from 'react-dom'

// Material UI Component
import { BrowserRouter } from 'react-router-dom';

// css file
import './index.css';

// React Component
import Shop from './Shop.js';

ReactDOM.render(
	<BrowserRouter>
		<Shop />
	</BrowserRouter>,
	document.getElementById('root')
);



