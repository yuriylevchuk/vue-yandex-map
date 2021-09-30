import { mount } from '@vue/test-utils';
import { yandexMap, ymapMarker } from '../src';

describe('Component', () => {
  const wrapper = mount(yandexMap, {
    props: {
      coords: [1, 1],
    },
  });

  test('Map is rendered', () => {
    expect(wrapper.find('.ymap-container').exists()).toBe(true);
  });
});
