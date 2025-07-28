// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthorizationAPI from '../../auth/authorization/authorization';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Get extends APIResource {
  /**
   * Get a list of client applications that an end-user has authorized.
   *
   * The subject parameter is required and can be provided either in the path or as a
   * query parameter.
   *
   * @example
   * ```ts
   * const gets = await client.client.authorization.get.list(
   *   'serviceId',
   *   { subject: 'subject' },
   * );
   * ```
   */
  list(serviceID: string, query: GetListParams, options?: RequestOptions): APIPromise<GetListResponse> {
    return this._client.get(path`/api/${serviceID}/client/authorization/get/list`, { query, ...options });
  }
}

export interface GetListResponse {
  /**
   * An array of clients.
   */
  clients?: Array<GetListResponse.Client>;

  /**
   * Unique ID of a client developer.
   */
  developer?: string;

  /**
   * End index of search results (exclusive).
   */
  end?: number;

  /**
   * Start index of search results (inclusive).
   */
  start?: number;

  /**
   * Unique user ID of an end-user.
   */
  subject?: string;

  /**
   * Unique ID of a client developer.
   */
  totalCount?: number;
}

export namespace GetListResponse {
  export interface Client {
    /**
     * The client identifier used in Authlete API calls. The value of this property is
     * assigned by Authlete.
     */
    clientId?: number;

    /**
     * The value of the client's `client_id` property used in OAuth and OpenID Connect
     * calls. By default, this is a string version of the `clientId` property.
     */
    clientIdAlias?: string;

    /**
     * Deprecated. Always set to `true`.
     */
    clientIdAliasEnabled?: boolean;

    /**
     * The name of the client application. This property corresponds to `client_name`
     * in
     * [OpenID Connect Dynamic Client Registration 1.0, 2. Client Metadata](https://openid.net/specs/openid-connect-registration-1_0.html#ClientMetadata).
     */
    clientName?: string;

    /**
     * Client names with language tags. If the client application has different names
     * for different languages, this property can be used to register the names.
     */
    clientNames?: Array<AuthorizationAPI.TaggedValue>;

    /**
     * The client type, either `CONFIDENTIAL` or `PUBLIC`. See
     * [RFC 6749, 2.1. Client Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1)
     * for details.
     */
    clientType?: 'PUBLIC' | 'CONFIDENTIAL';

    /**
     * The description about the client application.
     */
    description?: string;

    /**
     * Descriptions about the client application with language tags. If the client
     * application has different descriptions for different languages, this property
     * can be used to register the descriptions.
     */
    descriptions?: Array<AuthorizationAPI.TaggedValue>;

    /**
     * The sequential number of the client. The value of this property is assigned by
     * Authlete.
     */
    number?: number;
  }
}

export interface GetListParams {
  /**
   * Unique user ID of an end-user.
   */
  subject: string;

  /**
   * Unique ID of a client developer.
   */
  developer?: string;

  /**
   * End index of search results (exclusive). The default value is 5.
   */
  end?: number;

  /**
   * Start index of search results (inclusive). The default value is 0.
   */
  start?: number;
}

export declare namespace Get {
  export { type GetListResponse as GetListResponse, type GetListParams as GetListParams };
}
