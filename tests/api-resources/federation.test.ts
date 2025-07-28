// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Authelete from 'authelete';

const client = new Authelete({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource federation', () => {
  // skipped: tests are disabled for the time being
  test.skip('createConfiguration', async () => {
    const responsePromise = client.federation.createConfiguration('serviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createConfiguration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.federation.createConfiguration('serviceId', { body: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Authelete.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('register', async () => {
    const responsePromise = client.federation.register('serviceId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
