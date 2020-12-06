/* eslint-disable */

module.exports = {
  clearMocks: true,
  moduleDirectories: ['<rootDir>../node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  rootDir: '../../src',
  transform: { '\\.tsx?$': 'ts-jest' },
  setupFilesAfterEnv: ['<rootDir>../config/jest/jest.setup.tsx'],
  globals: {
    render: require('@testing-library/react').render,
  },
  moduleNameMapper: {
    '^api$': '<rootDir>api',
    'api/(.*)$': '<rootDir>api/$1',
    '^components$': '<rootDir>components',
    'components/(.*)$': '<rootDir>components/$1',
  },
};
