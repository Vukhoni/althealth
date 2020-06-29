import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import BirthDays from './components/Birthdays';
const App = () =>{
    return(
        <Layout>
            <div className={'row'}>
                <div className='col-sm-4 col-md-3 col-lg-2 col-xl-2'>
                    <BirthDays />
                </div>
                <div className='col-sm-4 col-md-9 col-lg-10 col-xl-10'>

                </div>

            </div>
        </Layout>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))