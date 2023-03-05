import { base } from "@/base";
import axios from "axios";

const apiv1 = base + "/api/v1";

const users = apiv1 + "/users";

export const login = async (data) => await axios.post(users + "/login", data);

export const forgotPassword = async (data) =>
  await axios.post(users + "/forgot-password", { email: data });

export const changePassword = async (data) =>
  await axios.put(users + "/change-password", data, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

export const getDashboardData = async () =>
  await axios.get(`${users}/dashboard`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

export const getPaginatedTransactions = async (limit = 100, page = 1) =>
  await axios.get(`${users}/transactions?limit=${limit}&page=${page}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
