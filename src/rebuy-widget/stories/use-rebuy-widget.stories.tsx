import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { useRebuyWidget } from '../use-rebuy-widget'

interface Props {
  shopifyDomain: string,
  widgetId: number
}

export const StoryComponent: Story<Props> = ({ shopifyDomain, widgetId }) => {
  useRebuyWidget(shopifyDomain)

  return (
    <div>
      <div className="rebuy-widget" data-rebuy-id={widgetId}></div>
      <script>Rebuy.init();</script>
    </div>
  )
}

StoryComponent.storyName = 'Widget'
StoryComponent.args = {
  shopifyDomain: 'rebuyengine.myshopify.com',
  widgetId: 14958
}

export default {
  title: `Rebuy/${StoryComponent.storyName}`
}
