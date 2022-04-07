import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the Profile correctly', () => {
    const { container } = renderWithTheme(<Profile />)

    expect(
      screen.queryByRole('img', { name: /Lucas Tumeleiro/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Lucas Tumeleiro/i })).toHaveAttribute(
      'src',
      `https://github.com/lucastumeleiro.png`
    )

    expect(screen.queryByRole('img', { name: /Level/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Level/i })).toHaveAttribute(
      'src',
      `icons/level.svg`
    )

    expect(screen.getByText(/Lucas Tumeleiro/i)).toBeInTheDocument()

    expect(screen.getByText(/Level 1/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
