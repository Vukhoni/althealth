import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";


const App = () => {
    return (
        <BrowserRouter>
            <Dashboard>
                <Switch>
                    <Route exact path="/">

                    </Route>
                </Switch>
            </Dashboard>
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
