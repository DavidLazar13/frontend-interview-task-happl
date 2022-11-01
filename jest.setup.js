jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))
jest.mock('next/dist/shared/lib/router-context', () => ({
  RouterContext: require('react').createContext(
    require('next-router-mock').default
  ),
}))

require('jest-fetch-mock').enableMocks()
