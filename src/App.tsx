import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderSummary from './pages/summary/OrderSummary';
import OrderEntry from './pages/entry/OrderEntry';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OrderEntry />} />
                <Route path="/summary" element={<OrderSummary />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
