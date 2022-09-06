import axios from "axios";

export const APIHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": {
    toString() {
      return "Bearer p1EdE1ouTkARQ4QPbP-L";
    },
  },
};

export const API = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  timeout: 6000,
  headers: APIHeaders,
});
