import axios from "axios";

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
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // return error;
      console.log(error);
    });
};
