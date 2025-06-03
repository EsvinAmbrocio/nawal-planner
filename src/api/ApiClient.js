import { HttpMethod, ApiError } from '../types/index';

/**
 * @typedef {Record<string, string>} Headers
 * @typedef {Record<string, string | number | boolean>} Params
 * @typedef {Record<string, unknown> | FormData | null} RequestData
 */

export class ApiClient {
  /** @type {string} */
  baseUrl = '';
  /** @type {Headers} */
  defaultHeaders;

  constructor(baseUrl, globalHeaders = {}) {
    this.setBaseUrl(baseUrl);
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...globalHeaders,
    };
  }

  setBaseUrl(baseUrl) {
    if (typeof baseUrl !== 'string') throw new Error('baseUrl must be a string');
    if (String(baseUrl).trim().length === 0) throw new Error('baseUrl cannot be empty');
    if (!String(baseUrl).endsWith('/')) baseUrl += '/';
    this.baseUrl = baseUrl;
  }

  setGlobalHeader(key, value) {
    this.defaultHeaders[key] = value;
  }

  removeGlobalHeader(key) {
    delete this.defaultHeaders[key];
  }

  async request(method, path, data = null, params = {}, headers = {}, customOptions = {}) {
    if (String(path ?? '').startsWith('/')) path = path.replace(/^\//, '');
    const url = new URL(path, this.baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
    const mergedHeaders = { ...this.defaultHeaders, ...headers };
    Object.keys(mergedHeaders).forEach(key => {
      if (mergedHeaders[key] == null) delete mergedHeaders[key];
    });
    const options = {
      method,
      headers: mergedHeaders,
      ...customOptions,
    };
    if (data) {
      if (data instanceof FormData) {
        options.body = data;
        delete options.headers['Content-Type'];
      } else {
        options.body = JSON.stringify(data);
      }
    }
    const response = await fetch(url.toString(), options);
    let responseData;
    const contentType = response.headers.get('content-type');
    try {
      responseData = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();
    } catch (error) {
      responseData = null;
    }
    if (!response.ok) {
      throw new ApiError(
        `Error en la solicitud: ${response.statusText}`,
        response.status,
        responseData
      );
    }
    return responseData;
  }

  get(path, params = {}, headers = {}, options = {}) {
    return this.request(HttpMethod.GET, path, null, params, headers, options);
  }

  post(path, data, params = {}, headers = {}, options = {}) {
    return this.request(HttpMethod.POST, path, data, params, headers, options);
  }

  put(path, data, params = {}, headers = {}, options = {}) {
    return this.request(HttpMethod.PUT, path, data, params, headers, options);
  }

  patch(path, data, params = {}, headers = {}, options = {}) {
    return this.request(HttpMethod.PATCH, path, data, params, headers, options);
  }

  delete(path, params = {}, headers = {}, options = {}) {
    return this.request(HttpMethod.DELETE, path, null, params, headers, options);
  }
}
