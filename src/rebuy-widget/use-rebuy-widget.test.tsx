import React from 'react'
import { render } from '@testing-library/react'
import faker from 'faker'
import { useRebuyWidget } from './use-rebuy-widget'

interface Props {
  shopifyDomain: string
}

const Test: React.FC<Props> = ({ shopifyDomain }) => {
  useRebuyWidget(shopifyDomain)
  return null
}

describe('useRebuyWidget', () => {
  it('renders script', () => {
    const appKey = faker.datatype.uuid()

    render(<Test appKey={appKey} />)

    expect(document.querySelector(`script[data-script="rebuy"]`)).toBeDefined()
  })

  it('renders only one script and uses latest app key', () => {
    const appKey = faker.datatype.uuid()
    const appKey2 = faker.datatype.uuid()

    render(
      <>
        <Test appKey={appKey} />
        <Test appKey={appKey2} />
      </>
    )

    expect(document.querySelectorAll(`script[data-script="rebuy"]`)).toHaveLength(1)
  })
})
