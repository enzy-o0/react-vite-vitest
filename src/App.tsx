import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderSummary from './pages/summary/OrderSummary';
import { OrderDetailsProvider } from './contexts/OrderDetails';
import OrderConfirmation from './pages/confirmation/OrderConfirmation';
import OrderEntry from './pages/entry/OrderEntry';
import React from 'react';
import { Container } from 'react-bootstrap';

function App() {
    const [orderPhase, setOrderPhase] = React.useState('inProgress');
    
    let Component = OrderEntry;

    switch(orderPhase) {
        case 'inProgress':
            Component = OrderEntry;
            break;
        case 'review':
            Component = OrderSummary;
            break;
        case 'completed':
            Component = OrderConfirmation;
            break;
        default:
    }
    return (
        <OrderDetailsProvider>
            {/* <OrderEntry />
            <OrderSummary />
            <OrderConfirmation /> */}
            <Container>
                {<Component setOrderPhase={setOrderPhase} />}
            </Container>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OrderEntry />} />
                    <Route path="/summary" element={<OrderSummary />} />
                    <Route path="/confirmation" element={<OrderConfirmation setOrderPhase={setOrderPhase} />} />
                </Routes>
            </BrowserRouter> */}
        </OrderDetailsProvider>
     
    );
}

export default App;
