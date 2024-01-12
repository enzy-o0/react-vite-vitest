import axios from 'axios';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

type OptionsPropType = {
    optionType: 'scoops' | 'toppings';
};

export type OptionResponseType = {
    name: string;
    imagePath: string;
};

const Options = ({ optionType }: OptionsPropType) => {
    const [items, setItems] = useState([]);
    React.useEffect(() => {
        axios
            // .get(`http://localhost:3030/${optionType}`)
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {});
    }, [optionType]);

    // TODO : null 대신 ToppingOption이 들어갈 예정
    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionItems = items.map((item: OptionResponseType) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    return <Row>{optionItems}</Row>;
};

export default Options;
