import { HttpResponse, http } from 'msw';
import { server } from '@/app/apiMockServer';
import { render, screen } from '@/shared/lib';
import { OrderConfirmationPage } from '@/pages/confirmation';

test('error response from server for submitting order', async () => {
    server.resetHandlers(
        http.post('http://localhost:3030/order', () => {
            return new HttpResponse(null, { status: 500 });
        }),
    );

    

    render(<OrderConfirmationPage setOrderPhase={vitest.fn}/>);

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('예상되지 않은 오류가 있습니다. 잠시 후에 다시 시도해주세요');
});
