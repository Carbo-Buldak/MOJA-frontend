import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://52.78.174.72:5000/api",
});

export const getUserDataReq = async (token) => {
  const response = await instanceAxios.get("/user", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data;
}

export const signUpRequest = async (signUpParams) => {
  const response = await instanceAxios.post("/user", signUpParams)
  return response.status
}

export const logInRequest = async (loginReqParms) => {
  console.log(JSON.stringify(loginReqParms));
  const response = await instanceAxios.post(
    "/signin",
    JSON.stringify(loginReqParms)
  );
  localStorage.setItem("token", response.data.token);
  console.log(response.data);
  return response.state;
};

export const applyVideoReq = async (url, title, token) => {
  const response = await instanceAxios.post("/video", {
    url,
    title,
  }, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.data;
};

export const getVideoInfoReq = async (url) => {
  const response = await instanceAxios.get(`/video/${url}`)
  return response.data
}

export const getVideoListReq = async (status, sorting, skips, items) => {
  const response = await instanceAxios.get(`/video?status=${status}&sorting=${sorting}&skips=${skips}&items=${items}`);
  return response.data;
}

export const searchVideoReq = async (keyWord) => {
  const response = await instanceAxios.get(`/video?searching=true&keyword=${keyWord}`)
  return response.data;
}

export const addTemporarySubtitleReq = async (token, url, subtitle) => {
  const response = await instanceAxios.patch(`/user/video/${url}`, {
    subtitle
  }, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
}

export const addSubtitleReq = async (url, subtitle, token) => {
  const response = await instanceAxios.patch(`/video/${url}`, {
    subtitle
  }, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data;
}

export const getTemporarySubtitleReq = async (token, url) => {
  const response = await instanceAxios.get(`/user/video/${url}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data
}