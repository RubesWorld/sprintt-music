import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "user-access-token": "5b70d50f-9a2a-4398-a3e3-609b11be7a7b",
    },
    baseURL: "https://api.sprintt.co/spotify/",
  });
};

export default axiosWithAuth;
