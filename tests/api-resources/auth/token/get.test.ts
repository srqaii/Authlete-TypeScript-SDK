// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Authelete from 'authelete';

const client = new Authelete({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource get', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.auth.token.get.list('serviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.auth.token.get.list(
        'serviceId',
        { clientIdentifier: 'clientIdentifier', end: 0, start: 0, subject: 'subject' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Authelete.NotFoundError);
  });
});
