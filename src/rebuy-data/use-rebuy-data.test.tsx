import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'regenerator-runtime/runtime'

const server = setupServer(
  rest.post('https://cdn.rebuyengine.com/api/v1/custom/id/12929', (req, res, ctx) => {
    const shopify_customer_id = '5268628471886'
    const key = 'gxhxRd6iHTHXsG7zjl7eWnjAVvvhmEGj9Q48tnkuwNHPx4Vv2UDtjwFNGHUVDJ3Rg3YOM1yUeyDvkvvOGj5tUg%3D%3D'

    return res(ctx.json({
      shopify_customer_id,
      key
    }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
test('allows user to fetch data', async () => {
  // Render components, perform requests, receive mocked responses.
  console.log('success');
})