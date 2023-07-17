import axios from "axios";

const baseURL = "http://localhost:3333/v1/app";

export default class ApiService {
  static async login<T>({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    return axios.post<T>(
      `${baseURL}/login`,
      {
        password,
        email,
      },
      {
        withCredentials: true,
      }
    );
  }
}
