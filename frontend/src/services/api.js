import axios from "axios";

const API = axios.create({
  baseURL: "http://backend-service"
});

export const predictDisease = (symptoms) => {
  return API.post("/predict", { symptoms });
};
