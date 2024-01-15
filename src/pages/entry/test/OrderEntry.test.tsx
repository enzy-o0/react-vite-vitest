import { render, screen } from '../../../test-utils/testing-library-utils';
import OrderEntry from '../OrderEntry';

import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';

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
