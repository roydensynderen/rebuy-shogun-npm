import React from 'react'
import { render } from '@testing-library/react'
import { useRebuyWidget } from './use-rebuy-widget'

interface Props {
  shopifyDomain: string
}

const Test: React.FC<Props> = ({ shopifyDomain }) => {
  useRebuyWidget(shopifyDomain)
  return null
}

describe('useRebuyWidget', () => {
  it('renders Rebuy script', () => {
    render(<Test />)

    expect(document.querySelector(`script[data-script="rebuy"]`)).toBeDefined()
  })

  it('renders only one script with multiple widgets', () => {
    render(
      <>
        <Test />
        <Test />
        <Test />
      </>
    )

    expect(document.querySelectorAll(`script[data-script="rebuy"]`)).toHaveLength(1)
  })
})
