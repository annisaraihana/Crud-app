import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import NavBar from "../../components/navbar/NavBar";
import Settings from "../../components/Settings/Settings";


export default function Setting() {
    return (
        <div>
            <NavBar />
            <Sidebar />
            <Settings />
        </div>
    )
}