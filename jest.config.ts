// jest.config.ts
import type {Config} from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: 'jsdom',
    coverageReporters: ['json-summary', 'text', 'text-summary'],
    coverageThreshold: {
      global: {
        lines: 0,
      },
    },
  };
};
