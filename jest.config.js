module.exports = {
  collectCoverageFrom: ['./src/**/*.{js,jsx}', '!<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@app(.*)$': '<rootDir>/src$1',
    '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  modulePaths: ['<rootDir>/node_modules/', '<rootDir>/src/', '<rootDir>/src/utils/bemHelper'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
