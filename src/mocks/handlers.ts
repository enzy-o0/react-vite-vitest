import { delay, http, HttpResponse } from 'msw';

export const handlers = [
    http.get('http://localhost:3030/scoops', () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            { name: 'Chocolate', immagePath: '/images/chocolate.png' },
            { name: 'Vanilla', immagePath: '/images/vanilla.png' },
        ]);
    }),
    http.get('http://localhost:3030/toppings', () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            { name: 'Cherries', immagePath: '/images/cherries.png' },
            { name: 'M&Ms', immagePath: '/images/m-and-ms.png' },
            { name: 'Hot fudge', immagePath: '/images/hot-fudge.png' },
        ]);
    }),
    http.post('http://localhost:3030/order', async () => {
        await delay(400)
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json({
            orderNumber: 123123123
        }, {
            status: 201
        });
    }),
];
