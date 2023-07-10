import { AuthPaths, LoginInput } from "~/types";
import instance from "./axios";

const authServices = {
  login: (data: LoginInput) => {
    return instance.post(AuthPaths.Login, data);
  },
};

export default authServices;
