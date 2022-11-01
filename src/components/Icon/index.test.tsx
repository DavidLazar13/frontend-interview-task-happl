import { render } from '@testing-library/react'
import Icon from '@/components/Icon'
import '@testing-library/jest-dom'

describe('Icon', () => {
  it('renders as expected', () => {
    const { container } = render(<Icon icon="logo" />)
    expect(container).toMatchSnapshot()
  })
})
