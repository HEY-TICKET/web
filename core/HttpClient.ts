import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const HEADERS = {
  contentType: 'Content-Type',
  authorization: 'Authorization',
} as const;

const CONTENT_TYPES = {
  applicationJson: 'application/json',
} as const;

// const AUTHORIZATION_TYPES = {
//   bearer: 'Bearer',
// } as const;

interface HttpClientOptions {
  baseUrl?: string;
  apiVersion?: number;
  acceptAllResponse?: boolean;
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected static token: string | null;
  private _options: HttpClientOptions = {};

  protected constructor(options?: HttpClientOptions) {
    this._resolveOptions(options);

    this.instance = axios.create({
      // baseURL: `${this._options.baseUrl}/v${this._options.apiVersion}`,
      baseURL: `${this._options.baseUrl}`,
    });

    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _resolveOptions = (options?: HttpClientOptions) => {
    this._options = {
      ...options,
      baseUrl: options?.baseUrl,
      apiVersion: options?.apiVersion || 1,
    };
  };

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest, this._handleError);
  };
  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  };

  setToken = (token: string | null): void => {
    HttpClient.token = token;
  };

  _handleRequest = (config: InternalAxiosRequestConfig) => {
    config.headers[HEADERS.contentType] = CONTENT_TYPES.applicationJson;
    // config.headers[HEADERS.authorization] = `${AUTHORIZATION_TYPES.bearer} ${HttpClient.token}`;
    return config;
  };

  _handleResponse = (response: AxiosResponse) => {
    if (this._options.acceptAllResponse) return response;
    return response.data;
  };
  _handleError = ({ response: { data, status } }: { response: { data?: any; status: any } }) =>
    Promise.reject({ data, status });
}
