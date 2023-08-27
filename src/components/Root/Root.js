import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

import './root.css';
import './reset.css';


export default function Root () {
    return (
        <div className="body">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}