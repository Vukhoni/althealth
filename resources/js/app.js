import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import Layout from "./components/containers/Layout";
import Home from "./components/containers/Home";
import * as althealth from "althealth-package";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("App")
);
