"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msw_1 = require("msw");
const dataSourceUrl = 'https://rebuyengine.com/api/v1/custom/id/12929?shopify_customer_id=5268628471886&key=gxhxRd6iHTHXsG7zjl7eWnjAVvvhmEGj9Q48tnkuwNHPx4Vv2UDtjwFNGHUVDJ3Rg3YOM1yUeyDvkvvOGj5tUg%3D%3D&format=pretty&limit=5';
msw_1.rest.get(dataSourceUrl, (req, res, ctx) => {
    console.log(res);
    if (res) {
        return res(ctx.status(200), ctx.json(res));
    }
    else {
        return res(ctx.status(403), ctx.json({
            errorMessage: 'Unable to fetch data source. Please check the API endpoint.',
        }));
    }
});
