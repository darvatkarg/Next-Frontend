import axios from "axios";
import { toast } from "react-toastify";

export const commonRequest = async (methods, url, body, headers) => {
  let config = {
    method: methods,
    url,
    baseURL: "http://localhost:8000/api",
    data: body,
    headers: headers
      ? headers
      : {
          "Content-Type": "application/json",
        },
  };

  //axios instance
  return axios(config)
    .then((res) => {
      toast.success(res.data.message);
      return res;
    })
    .catch((error) => {
      toast.error("Something went wrong");
      return error;
    });
};
