import { render, waitFor } from '@testing-library/react'
import List from '@/components/List'
import '@testing-library/jest-dom'
import 'jest-fetch-mock'
import data from '@/data/data.json'

describe('List', () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify({ result: data }), { status: 200 })
  })

  it('renders as expected', async () => {
    const { container } = render(<List />)
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(container).toMatchSnapshot())
  })

  it.skip('renders header as expected', async () => {})

  it.skip('renders list as expected', async () => {})

  it.skip('renders active allowance as expected', async () => {})

  it.skip('renders expense allowance as expected', async () => {})

  it.skip('renders card allowance as expected', async () => {})

  it.skip('renders inactive allowance as expected', async () => {})
})
