import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./Error";
import Add from "./Add";
import View from "./View";
import Home from "./Home";
import AddWithFile from "./AddWithFile";

class Navbar extends React.Component {
    render() {
        return <>
            <BrowserRouter>
                <nav class="navbar navbar-expand-sm bg-light">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/add">Add</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/view">View</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/add-with-file">Add with File</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/add" element={<Add />}></Route>
                    <Route path="/view" element={<View />}></Route>
                    <Route path="add-with-file" element={<AddWithFile />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    }
}
export default Navbar;