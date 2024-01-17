import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { aw } from 'vitest/dist/reporters-qc5Smpt5.js';
import { server } from '../mocks/server';
import { HttpResponse, http } from 'msw';

test('order phases for happy path', async () => {
    const user = userEvent.setup();
    // render app
    const {unmount } = render(<App />)
    
    // add ice crean scoops and toppings

    const vanillaInut = await screen.findByRole("spinbutton", {
        name: "Vanilla",
    });
    await user.clear(vanillaInut);
    await user.type(vanillaInut, "1");

    const chocolateInput = await screen.findByRole("spinbutton", {
        name: "Chocolate",
    });
    await user.clear(chocolateInput);
    await user.type(chocolateInput, "2");

    const cherriesCheckbox = await screen.findByRole("checkbox", {
        name: "Cherries"
    });
    await user.click(cherriesCheckbox);

    // find and click order button
    const orderSummaryButton = screen.getByRole("button", {
        name: /주문하기/,
    })
    await user.click(orderSummaryButton);

    // check summary information based on order

    const summaryHeading = screen.getByRole("heading", {name: "Order Summary"});
    expect(summaryHeading).toBeInTheDocument();

    const scoopsHeading  = screen.getByRole("heading", {
        name: "Scoops: $6.00"
    });
    expect(scoopsHeading).toBeInTheDocument();

    const toppingsHeading = screen.getByRole("heading", {
        name: "Toppings: $1.50",
    });

    expect(toppingsHeading).toBeInTheDocument();

    expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
    expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
    expect(screen.getByText("Cherries")).toBeInTheDocument();

    // const optionItems = screen.getAllByRole('listitem');
    // const optionItemsText = optionItems.map((item) => item.textContent);
    // expect(optionItemsText).toEqual(['1 Vanilla', '2 Chocolate', 'Cherries'])

    // accept terms and conditions and click button to confirm order

    const tcCheckbox = screen.getByRole("checkbox", {
        name: /약관 동의/
    });
    await user.click(tcCheckbox);

    const confirmOrderButton = screen.getByRole("button", {
        name: /주문 확인하기/
    });

    await user.click(confirmOrderButton);

    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();

    // confirm order number and confirmation page

    const thankYouHeader = await screen.findByRole("heading", {
        name: /thank you/i,
    });

    expect(thankYouHeader).toBeInTheDocument();

    const notLoading = screen.getByText(/loading/i);
    expect(notLoading).not.toBeInTheDocument();

    // click "new order" button on confirmation page
    const orderNumber = await screen.findByText(/주문 번호/);
    expect(orderNumber).toBeInTheDocument();

    // check that scoops and toppings subtotals have been reset

    const scoopsTotal = await screen.findByText("Scoops total: $0.00");
    expect(scoopsTotal).toBeInTheDocument();

    const toppingsTotal = await screen.getByText("Toppings total: $0.00");
    expect(toppingsTotal).toBeInTheDocument();


    unmount();
});