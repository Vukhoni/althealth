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
import MonthlyPurchases from './components/containers/MonthlyPurchases';
import Invoices from './components/containers/Invoices';
import UnpaidInvoices from './components/containers/UnpaidInvoices';
import AddSupplier from './components/containers/AddSupplier';
import EditSupplier from './components/containers/EditSupplier';
import AddSupplement from './components/containers/AddSupplement';
import EditSupplement from './components/containers/EditSupplement';
import Invoice from './components/containers/Invoice';
import Shop from './components/containers/Shop';
import Cart from './components/containers/Cart';
import Profile from './components/containers/Profile';
import ClientInfo from './components/containers/ClientInfo';
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/shop">
                        <Shop/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/edit-client/:id">
                        <ClientInfo />
                    </Route>
                    <Route exact path="/login">
                        <SignInSide />
                    </Route>
                    <Route exact path="/register">
                        <SignUp />
                    </Route>
                    <Route exact path="/clients">
                        <ClientMaintenance />
                    </Route>
                    <Route exact path="/10">
                        <TopTenClients />
                    </Route>
                    <Route exact path="/birthdays">
                        <Birthdays />
                    </Route>
                    <Route exact path="/no-info">
                        <IncompletClients />
                    </Route>
                    <Route exact path="/suppliers">
                        <SupplierMaintenance />
                    </Route>
                    <Route exact path="/supplements">
                        <SupplementMaintenance />
                    </Route>
                    <Route exact path="/monthly">
                        <MonthlyPurchases />
                    </Route>
                    <Route exact path="/invoices">
                        <Invoices />
                    </Route>
                    <Route exact path="/unpaid">
                        <UnpaidInvoices />
                    </Route>
                    <Route exact path="/add-supplier">
                        <AddSupplier />
                    </Route>
                    <Route path="/edit-supplier/:id">
                        <EditSupplier />
                    </Route>
                    <Route exact path="/add-supplement">
                        <AddSupplement />
                    </Route>
                    <Route path="/edit-supplement/:id">
                        <EditSupplement />
                    </Route>
                    <Route path="/viewinvoice/:id">
                        <Invoice />
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
