import axios from "axios";
import ServiceHandler from "./servicehandler";

export const signUp = async (payload: {}) => {
  return await ServiceHandler(axios.post(`/auth/signup`, payload));
};
export const signIn = async (payload: {}) => {
  return await ServiceHandler(axios.post(`/auth/signin`, payload));
};
export const home = async (payload: {}) => {
  return await axios.get(`/home`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
export const getProfile = async (payload: {}) => {
  return await axios.get(`/profile`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    params: payload,
  });
};
export const updateProfile = async (payload: { id: number; data: {} }) => {
  return await axios.put(`/profile/${payload.id}`, payload.data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
