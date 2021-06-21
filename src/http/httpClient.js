import axios from "axios";

class HttpClient {
  constructor(baseUrl, headers) {
    // Default headers to use when calling API.
    this.defaultHeaders = {
      "Content-Type": "application/json"
    };

    this.httpClient = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      headers: headers ?? this.defaultHeaders
    });
  }
}

export default HttpClient;
