import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/containers/Layout';
import Home from './components/containers/Home';
import configureStore from './store';
import {Provider} from 'react-redux';

const App = () =>{
    return(
        <Layout>
            <Home />

        </Layout>
    )
}

const store = configureStore();
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('App'))