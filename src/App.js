import React from "react";
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                    <HeaderComponent/>
                    <div className="container">
                        <Routes>
                            <Route path="/" exact element={<ListEmployeeComponent/>}/>
                            <Route path="/items" element={<ListEmployeeComponent/>}/>
                            <Route path="/add-item" element={<CreateEmployeeComponent/>}/>
                            <Route path="/update-item/:id" element={<UpdateEmployeeComponent/>}/>
                            <Route path="/view-item/:id" element={<ViewEmployeeComponent/>}/>

                        </Routes>
                    </div>
                    <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
