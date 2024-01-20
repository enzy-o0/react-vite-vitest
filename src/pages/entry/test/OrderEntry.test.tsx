import { findByRole, render, screen } from '../../../test-utils/testing-library-utils';
import OrderEntry from '../OrderEntry';

import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';
import userEvent from '@testing-library/user-event';

test('handles error for scoops and toppings routes', async () => {
    server.resetHandlers(
        http.get('http://localhost:3030/scoops', () => {
            return new HttpResponse(null, {
                status: 500,
            });
        }),
        http.get('http://localhost:3030/toppings', () => {
            return new HttpResponse(null, {
                status: 500,
            });
        }),
    );

    // const { container } = render(<OrderEntry />);
    render(<OrderEntry />);

    const alerts = await screen.findAllByRole('alert', {
        // name: '예상되지 않은 에러가 있습니다. 추후에 다시 시도해주세요.',
    });

    // const alerts = await screen.findAllByText('예상되지 않은 에러가 있습니다. 추후에 다시 시도해주세요.');

    // logRoles(container);

    expect(alerts).toHaveLength(2);
});

test('disable order button if there are no scoops ordered', async () => {
    const user = userEvent.setup();
    render(<OrderEntry setOrderPhase={vi.fn()}/>);

    const orderButton = screen.getByRole("button", {
        name: /주문하기/
    });

    expect(orderButton).toBeDisabled();

    const vanillaInput = await screen.findByRole("spinbutton", {
        name: "Vanilla"
    })

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");

    expect(orderButton).toBeEnabled();

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "0");
    
    expect(orderButton).toBeDisabled();
    
});