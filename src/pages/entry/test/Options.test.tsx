import { render, screen } from '@testing-library/react';

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
