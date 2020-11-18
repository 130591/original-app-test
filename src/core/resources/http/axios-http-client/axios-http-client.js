import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/',
});

export class AxiosHttpClient {
  async request (data) {
    let axiosResponse = {}
    try {
      axiosResponse = await api({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      axiosResponse = error
    }

    return {
      statusCode: axiosResponse && axiosResponse.status || null,
      body: axiosResponse && axiosResponse.data || []
    }
  }
}
