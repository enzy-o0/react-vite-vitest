import React from 'react';
import { pricePerItem } from '../constants';

const OrderDetails = React.createContext();

// create custom hook to check whether we're in a provider

export function useOrderDetails() {
    const contextValue = React.useContext(OrderDetails);

    if (!contextValue) {
        throw new Error('useOrderDetails must be called from within as OrderDetailsProvider');
    }

    return contextValue;
}

export function OrderDetailsProvider(props) {
    const [optionCounts, setOptionCounts] = React.useState({
        scoops: {}, // { Chocolate: 1, Vanilla: 2}}
        toppings: {},
    });

    // React에서 지양하는 상태 변이가(mutation) 일어나지 않도록 함
    function updateItemCount(itemName, newItemCount, optionType) {
        // make a copy of existing state
        const newOptionCounts = { ...optionCounts };

        // update the copy with the new infomation
        newOptionCounts[optionType][itemName] = newItemCount;

        // update the state with th updated copy
        setOptionCounts(newOptionCounts);
    }

    function resetOrder() {
        setOptionCounts({ scoops: {}, toppings: {} });
    }

    function calculatedTotal(optionType) {
        const countArray = Object.values(optionCounts[optionType]);

        const totalCount = countArray.reduce((total, value) => total + value, 0);

        return totalCount * pricePerItem[optionType];
    }

    const totals = {
        scoops: calculatedTotal('scoops'),
        toppings: calculatedTotal('toppings'),
    };

    const value = { optionCounts, totals, updateItemCount, resetOrder };

    return <OrderDetails.Provider value={value} {...props} />;
}
