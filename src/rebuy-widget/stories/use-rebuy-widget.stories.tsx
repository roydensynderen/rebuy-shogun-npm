import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { useRebuyWidget } from '../use-rebuy-widget'

const widgetId = 14958

interface Props {
  shopifyDomain: string
}

export const StoryComponent: Story<Props> = ({ shopifyDomain }) => {
  useRebuyWidget(shopifyDomain)

  return (
    <div data-rebuy={widgetId} data-rebuy-shopify-product-ids={productId}></div>
  )
}

StoryComponent.storyName = 'Rebuy Widget'
StoryComponent.args = {
  shopifyDomain: process.env.REBUY_SHOPIFY_DOMAIN ?? '',
  productId: process.env.SHOPIFY_PRODUCT_ID ?? '',
}

export default {
  title: `Rebuy/${StoryComponent.storyName}`
}
