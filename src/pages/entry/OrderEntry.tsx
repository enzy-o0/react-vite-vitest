import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';
import OrderSummary from '../summary/OrderSummary';
import { useNavigate } from 'react-router-dom';

const OrderEntry = ({setOrderPhase}) => {
    const { totals } = useOrderDetails();

    // const navigate = useNavigate();

    function handleClick() {
        // navigate('/summary');
        setOrderPhase('review');
    }

    return (
        <div>
            <h1>Design Your Sundae!</h1>
            <Options optionType="scoops" />
            <Options optionType="toppings" />
            <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
            <button onClick={handleClick}>주문하기</button>
        </div>
    );
};

export default OrderEntry;
