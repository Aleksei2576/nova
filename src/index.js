import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/App.css';
import {createStore} from 'redux';
import {Provider}  from 'react-redux';

const defaultState = {
	route: '/'
}

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "home":
			return {route: '/'}
		case "about":
			return {route: '/about'}
		case "products":
			return {route: '/products'}
		case "solutions":
			return {route: '/solutions'}
		case "projects":
			return {route: '/projects'}
		case "contact":
			return {route: '/contact'}
		default:
			return state
	}
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store = {store} >
  	  <App />
  	</Provider>
);