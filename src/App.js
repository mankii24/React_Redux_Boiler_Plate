import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/reducer';
import HelloWorld from './components/HelloWorld';
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
    return (
        <Provider store={ store }>
            <HelloWorld/>
        </Provider>
    );
}
export default App;