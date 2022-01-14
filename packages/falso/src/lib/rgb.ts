import { randomFloat } from './random-float';
import { fake, FakeOptions, getRandomInRange } from './core';

export interface RGBOptions extends FakeOptions {
  alpha?: boolean;
}

export function rgb<Options extends RGBOptions>(options?: Options) {
  const factory = () => {
    const [r, g, b, a] = [
      getRandomInRange({ min: 0, max: 255 }),
      getRandomInRange({ min: 0, max: 255 }),
      getRandomInRange({ min: 0, max: 255 }),
      randomFloat({ min: 0.1, max: 1 }),
    ];

    return options?.alpha
      ? `rgba(${r}, ${g}, ${b}, ${a})`
      : `rgb(${r}, ${g}, ${b})`;
  };

  return fake(factory, options);
}