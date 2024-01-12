import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('http://localhost:3030/scoops', () => {
        // Note that you DON'T have to stringify the JSON!
        return HttpResponse.json([
            { name: 'Chocolate', immagePath: '/images/chocolate.png' },
            { name: 'Vanilla', immagePath: '/images/vanilla.png' },
        ]);
    }),
];
