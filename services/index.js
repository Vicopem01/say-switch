import { base } from "@/base";
import axios from "axios";

export const login = async (data) =>
  await axios.post(base + "/api/v1/users/login", data);

export const forgotPassword = async (data) =>
  await axios.post(base + "/api/v1/users/forgot-password", { email: data });

export const changePassword = async (data) =>
  await axios.put(base + "/api/v1/users/change-password", data, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
