import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import axios from 'axios';
import Layout from "./components/containers/Layout";
import Home from "./components/containers/Home";
import { SignInSide } from "./components/presentational/SignIn";
import SignUp from "./components/presentational/SignUp";
import ClientMaintenance from './components/containers/ClientMaintenance';
import TopTenClients from './components/containers/TopTenClients';
import Birthdays from './components/containers/Birthdays';
import IncompletClients from './components/containers/IncompleteClients';
import SupplierMaintenance from './components/containers/SupplierMaintenance';
import SupplementMaintenance from './components/containers/SupplementMaintenance';
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <SignInSide />
                    </Route>
                    <Route exact path="/register">
                        <SignUp />
                    </Route>
                    <Route path="/clients">
                        <ClientMaintenance />
                    </Route>
                    <Route path="/10">
                        <TopTenClients />
                    </Route>
                    <Route path="/birthdays">
                        <Birthdays />
                    </Route>
                    <Route path="/no-info">
                        <IncompletClients />
                    </Route>
                    <Route path="/suppliers">
                        <SupplierMaintenance />
                    </Route>
                    <Route path="/supplements">
                        <SupplementMaintenance />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

const store = configureStore();
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("App")
);
