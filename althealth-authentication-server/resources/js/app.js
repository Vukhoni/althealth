import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";



const App = () => {
    return (
        <Layout>
            <Home />

            </Layout>
    );
};

const store = configureStore();
ReactDOM.render(
    <App />,
    document.getElementById("App")
);
