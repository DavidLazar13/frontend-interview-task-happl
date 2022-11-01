const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components(.*$)': '<rootDir>/src/components/$1',
    '^@/constants(.*$)': '<rootDir>/src/constants/$1',
    '^@/data(.*$)': '<rootDir>/src/data/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/styles(.*)$': '<rootDir>/src/styles/$1',
    '^@/types(.*$)': '<rootDir>/src/types/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
}

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()

  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

module.exports = jestConfig
