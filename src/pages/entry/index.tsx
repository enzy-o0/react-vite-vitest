import { Container } from 'react-bootstrap';
import OrderEntry from './OrderEntry';
import { OrderDetailsProvider } from '../../contexts/OrderDetails';

const Entry = () => {
    return (
        <Container>
            <OrderDetailsProvider>
                <OrderEntry />
            </OrderDetailsProvider>
        </Container>
    );
};

export default Entry;
