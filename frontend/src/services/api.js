import axios from "axios";

export const predictDisease = (symptoms) => {
  return axios.post("/predict", { symptoms });
};
