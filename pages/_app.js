import { Provider } from 'react-redux';
import store from '../redux/store';

import withRedux, { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);