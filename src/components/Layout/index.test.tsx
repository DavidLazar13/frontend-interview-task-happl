import { render, fireEvent } from '@testing-library/react'
import Layout from '@/components/Layout'
import '@testing-library/jest-dom'
import { INDEX } from '@/constants/routes'
import mockRouter from 'next-router-mock'
import router from 'next/router'

const children = 'Children'

describe('Layout', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl(`${INDEX}#`)
  })

  it('renders as expected', () => {
    const { container } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    expect(container).toMatchSnapshot()
  })

  it('renders logo as expected', () => {
    const { getByTestId } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    expect(getByTestId('icon-logo')).toBeInTheDocument()
  })

  it('renders name as expected', () => {
    const { getByText } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    expect(getByText('Happl')).toBeInTheDocument()
  })

  it('renders children as expected', () => {
    const { getByText } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    expect(getByText(children)).toBeInTheDocument()
  })

  it('renders home as expected', () => {
    const { getByText, getByTestId } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Home')).toHaveAttribute('href', INDEX)
    expect(getByTestId('icon-home')).toBeInTheDocument()
  })

  it('makes expected calls on home  click', async () => {
    const { getByText } = render(
      <Layout>
        <p>{children}</p>
      </Layout>
    )
    fireEvent.click(getByText('Home'))
    expect(router.asPath).toBe(INDEX)
  })
})
