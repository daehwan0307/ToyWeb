import { Component } from "react/cjs/react.production.min";
import Layout from "../componenents/Layout";
import "../styles/globals.css";


export default function App({Component,pageProps}){
    return ( 

    <Layout>
        <Component {...pageProps}/>
    </Layout>

    );
}