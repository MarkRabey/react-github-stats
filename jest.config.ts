// jest.config.ts
import type {Config} from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/docs-build', '<rootDir>/lib'],
    moduleNameMapper: {
      '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'babel-jest',
    },
    coverageReporters: ['json-summary', 'text', 'text-summary'],
    coverageThreshold: {
      global: {
        lines: 0,
      },
    },
  };
};
