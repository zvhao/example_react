import { Space } from "antd";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { authServices } from "~/services";
import { Status } from "~/types";
import "./Login.css";
import { AxiosError } from "axios";
const Login: React.FC = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState<Status>(Status.Ready);
  const [error, setError] = useState("");

  const onFinish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("values: ", values);

    setStatus(Status.Start);

    return new Promise(async (resolve, _) => {
      try {
        const response = await authServices.login(values);
        setStatus(Status.Complete);
        console.log("response: ", response);

        resolve(true);
      } catch (error) {
        setStatus(Status.Fail);
        if (error instanceof AxiosError) {
          if (error.response && error.response.data) {
            setError(error.response.data.error);
          }
        }
        console.log("Login failed: ", error);
      }
    });
  };
  console.log("status: ", status);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={onFinish} action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={onChangeInput}
                value={values.email}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                value={values.password}
                onChange={onChangeInput}
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button type="submit" disabled={status == Status.Start}>
              {status === Status.Start ? "Loading..." : "Login"}
            </button>
          </form>
        </Space>
      </div>
    </div>
  );
};

export default Login;
