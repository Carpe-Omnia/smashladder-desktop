// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import login from './login';
import builds from './builds';
import replays from './replays';
import dolphinSettings from './dolphinSettings';
import autoUpdates from './autoUpdates';
import replayWatch from './replayWatch';

const rootReducer = combineReducers({
	login,
	builds,
	replays,
	dolphinSettings,
	autoUpdates,
	replayWatch,
	router
});

export default rootReducer;
