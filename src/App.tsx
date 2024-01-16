import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderSummary from './pages/summary/OrderSummary';
import Entry from './pages/entry';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/summary" element={<OrderSummary />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
