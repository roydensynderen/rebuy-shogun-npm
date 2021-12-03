# Rebuy

Rebuy integration for Shogun Frontend.

> Rebuy creates intelligent shopping experience with data-driven persoanlization and providing merchandizing solutions.

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>This package runs on Shogun Frontend and is in customer Beta. It might not currently support all ecommerce platforms or cover all use cases.</td>
    </tr>
  </tbody>
</table>

[Rebuy website →](https://rebuyengine.com)

### Installation

`yarn add @frontend-sdk/rebuy`
`npm install @frontend-sdk/rebuy`

---

### Usage

## Rebuy Widgets

Inject Rebuy's script with your shopify domain (myshopify):

  ```jsx
  import { useRebuyWidget } from '@frontend-sdk/rebuy'

  const RebuyWidget = ({ widgetId }) => {
    useRebuyWidget('<insert Shopify domain>')

    return (
      <div
        data-rebuy-id="widgetId"
        data-rebuy-shopify-product-ids="<Product ID>"
      </div>
    )
  }
  ```

Props: widgetId, shopifyDomain

## Rebuy Data

Add `div` with the widget's data source API endpoint (You can find it here: https://rebuyengine.com/data_sources/id/<Data Source Id>/preview):

  ```jsx
  import { useRebuyData } from '@frontend-sdk/rebuy'

  const RebuyWidget = ({ dataSourceUrl }) => {
    const rebuyData = useRebuyData(dataSourceUrl)

    return (
      <div>
        { 
          rebuyData && 
          Object.keys(rebuyData).length > 0 &&
          <div className="rebuy-widget">
            <h1>Rebuy Section</h1>
            <div>
              { 
                rebuyData.data.map(each => {
                  return (
                    <div> {each.title} </div>
                  )
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }
  ```

Props: dataSourceUrl

---

### Links

- [Help Center: Installation ] (https://rebuyengine.com/help/docs)