// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Authelete from 'authelete';

const client = new Authelete({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource token', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.auth.token.create('serviceId', {
      clientId: 26888344961664,
      grantType: 'AUTHORIZATION_CODE',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.auth.token.create('serviceId', {
      clientId: 26888344961664,
      grantType: 'AUTHORIZATION_CODE',
      accessToken: 'accessToken',
      accessTokenDuration: 0,
      accessTokenPersistent: true,
      acr: 'acr',
      authorizationDetails: {
        elements: [
          {
            type: 'type',
            actions: ['string'],
            dataTypes: ['string'],
            identifier: 'identifier',
            locations: ['string'],
            otherFields: 'otherFields',
            privileges: ['string'],
          },
        ],
      },
      authTime: 0,
      certificateThumbprint: 'certificateThumbprint',
      clientEntityIdUsed: true,
      clientIdAliasUsed: true,
      dpopKeyThumbprint: 'dpopKeyThumbprint',
      forExternalAttachment: true,
      jwtAtClaims: 'jwtAtClaims',
      properties: [{ hidden: true, key: 'key', value: 'value' }],
      refreshToken: 'refreshToken',
      refreshTokenDuration: 0,
      resources: ['https://example.com'],
      scopes: ['history.read', 'timeline.read'],
      subject: 'john',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.auth.token.update('serviceId', {
      accessToken: 'Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.auth.token.update('serviceId', {
      accessToken: 'Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q',
      accessTokenExpiresAt: 0,
      accessTokenExpiresAtUpdatedOnScopeUpdate: true,
      accessTokenHash: 'accessTokenHash',
      accessTokenPersistent: true,
      accessTokenValueUpdated: true,
      authorizationDetails: {
        elements: [
          {
            type: 'type',
            actions: ['string'],
            dataTypes: ['string'],
            identifier: 'identifier',
            locations: ['string'],
            otherFields: 'otherFields',
            privileges: ['string'],
          },
        ],
      },
      certificateThumbprint: 'certificateThumbprint',
      dpopKeyThumbprint: 'dpopKeyThumbprint',
      forExternalAttachment: true,
      properties: [{ hidden: true, key: 'key', value: 'value' }],
      scopes: ['history.read'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.auth.token.delete('accessTokenIdentifier', { serviceId: 'serviceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.auth.token.delete('accessTokenIdentifier', { serviceId: 'serviceId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('fail: only required params', async () => {
    const responsePromise = client.auth.token.fail('serviceId', {
      reason: 'INVALID_RESOURCE_OWNER_CREDENTIALS',
      ticket: '83BNqKIhGMyrkvop_7jQjv2Z1612LNdGSQKkvkrf47c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('fail: required and optional params', async () => {
    const response = await client.auth.token.fail('serviceId', {
      reason: 'INVALID_RESOURCE_OWNER_CREDENTIALS',
      ticket: '83BNqKIhGMyrkvop_7jQjv2Z1612LNdGSQKkvkrf47c',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('issue: only required params', async () => {
    const responsePromise = client.auth.token.issue('serviceId', {
      subject: 'john',
      ticket: 'p7SXQ9JFjng7KFOZdCMBKcoR3ift7B54l1LGIgQXqEM',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('issue: required and optional params', async () => {
    const response = await client.auth.token.issue('serviceId', {
      subject: 'john',
      ticket: 'p7SXQ9JFjng7KFOZdCMBKcoR3ift7B54l1LGIgQXqEM',
      accessToken: 'accessToken',
      jwtAtClaims: 'jwtAtClaims',
      properties: [{ hidden: true, key: 'key', value: 'value' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('process: only required params', async () => {
    const responsePromise = client.auth.token.process('serviceId', {
      parameters:
        'grant_type=authorization_code&code=Xv_su944auuBgc5mfUnxXayiiQU9Z4-T_Yae_UfExmo&redirect_uri=https%3A%2F%2Fmy-client.example.com%2Fcb1&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('process: required and optional params', async () => {
    const response = await client.auth.token.process('serviceId', {
      parameters:
        'grant_type=authorization_code&code=Xv_su944auuBgc5mfUnxXayiiQU9Z4-T_Yae_UfExmo&redirect_uri=https%3A%2F%2Fmy-client.example.com%2Fcb1&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
      accessToken: 'accessToken',
      clientCertificate: 'clientCertificate',
      clientCertificatePath: 'clientCertificatePath',
      clientId: '26478243745571',
      clientSecret: 'gXz97ISgLs4HuXwOZWch8GEmgL4YMvUJwu3er_kDVVGcA0UOhA9avLPbEmoeZdagi9yC_-tEiT2BdRyH9dbrQQ',
      dpop: 'dpop',
      htm: 'htm',
      htu: 'htu',
      jwtAtClaims: 'jwtAtClaims',
      properties: 'properties',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke', async () => {
    const responsePromise = client.auth.token.revoke('serviceId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
