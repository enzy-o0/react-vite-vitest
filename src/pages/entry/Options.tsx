import axios from 'axios';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';
import { formatCurrency } from '../../utilities';
import { useOrderDetails } from '../../contexts/OrderDetails';

type OptionsPropType = {
    optionType: 'scoops' | 'toppings';
};

export type OptionResponseType = {
    name: string;
    imagePath: string;
};

const Options = ({ optionType }: OptionsPropType) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState<boolean | string>(false);
    const { totals } = useOrderDetails();

    React.useEffect(() => {
        axios
            // .get(`http://localhost:3030/${optionType}`)
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
                setError(true);
            });
    }, [optionType]);

    if (error) {
        return <AlertBanner variant="danger" />;
    }
    // TODO : null 대신 ToppingOption이 들어갈 예정
    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

    const optionItems = items.map((item: OptionResponseType) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    return (
        <>
            <h2>{title}</h2>
            <p>{formatCurrency(pricePerItem[optionType])} each</p>
            <p>
                {title} total: {formatCurrency(totals[optionType])}
            </p>
            <Row>{optionItems}</Row>
        </>
    );
};

export default Options;
