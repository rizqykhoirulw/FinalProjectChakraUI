import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import AddStudent from "./Routes/AddStudent.jsx";
import Student from "./Routes/Student.jsx";
import EditStudent from "./Routes/EditStudent.jsx";
import NotFound from "./Routes/NotFound.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<AddStudent />} />
            <Route path="student">
                <Route index element={<Student />}/>
                <Route path=":id" element={<EditStudent />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes> 
    );
};

export default App;
