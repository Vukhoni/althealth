import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import BirthDays from './components/Birthdays.jsx';
import configureStore from './store';
import {Provider} from 'react-redux';
const App = () =>{
    return(
        <Layout>
            <div className={'row'}>
                <div className='col-xl-3 col-lg-4 col-md-5 col-sm-4'>
                    <BirthDays/>
                </div>
                <div className='col-xl-9 col-lg-8 col-md-5 col-sm-4'>

                </div>

            </div>
        </Layout>
    )
}

const store = configureStore();
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('App'))