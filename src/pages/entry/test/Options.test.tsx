import { render, screen } from '../../../test-utils/testing-library-utils';

import Options from '../Options';

test('displays image for each scoop option from server', async () => {
    render(<Options optionType={'scoops'} />);

    // 이미지 찾기
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // 이미지 alt text 찾기
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping option from server', async () => {
    render(<Options optionType={'toppings'} />);

    // 이미지 찾기
    const toppingsImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingsImages).toHaveLength(3);

    // 이미지 alt text 찾기
    const altText = toppingsImages.map((element) => element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
});
