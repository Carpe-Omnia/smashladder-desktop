import electronSettings from 'electron-settings';
import {
	SET_LOGIN_KEY,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGIN_BEGIN,
	INVALID_LOGIN_KEY,
	LOGOUT_BEGIN,
	DISABLE_CONNECTION,
	ENABLE_CONNECTION, ENABLE_DEVELOPMENT_URLS, ENABLE_PRODUCTION_URLS
} from '../actions/login';


const loginDatas = electronSettings.get('login') || {};

console.log('login settings', loginDatas);
const initialState = {
	loginErrors: [],
	player: loginDatas.player || null,
	loginCode: loginDatas.loginCode || null,
	sessionId: loginDatas.sessionId || null,
	connectionEnabled: true,
	productionUrls: loginDatas.productionUrls === undefined ? true : loginDatas.productionUrls,
};

export default (state = initialState, action) => {
	switch(action.type)
	{
		case ENABLE_DEVELOPMENT_URLS:
			electronSettings.set('login.productionUrls', false);
			return {
				...state,
				productionUrls: false
			};
		case ENABLE_PRODUCTION_URLS:
			electronSettings.set('login.productionUrls', true);
			return {
				...state,
				productionUrls: true
			};
		case ENABLE_CONNECTION:
			return {
				...state,
				connectionEnabled: true
			};
		case DISABLE_CONNECTION:
			return {
				...state,
				connectionEnabled: false
			};
		case LOGOUT_BEGIN:
			return {
				...state,
				loginCode: null,
				sessionId: null,
				player: null,
			};
		case LOGIN_SUCCESS:
		case SET_LOGIN_KEY:
		case LOGIN_FAIL:
		case INVALID_LOGIN_KEY:
		case LOGIN_BEGIN:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
}