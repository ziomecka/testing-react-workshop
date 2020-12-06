export type RandomOptions = Partial<{ min: number; max: number }>;

const defaultRandomOptions: RandomOptions = { min: 0 };

export const random = (options = defaultRandomOptions) => {
  const { min = 0, max = (options.min || 0) + 1 } = options;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
