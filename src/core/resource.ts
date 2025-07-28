// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Authelete } from '../client';

export abstract class APIResource {
  protected _client: Authelete;

  constructor(client: Authelete) {
    this._client = client;
  }
}
