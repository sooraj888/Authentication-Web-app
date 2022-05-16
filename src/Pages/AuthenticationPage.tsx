import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationPage = () => {
  const navigate = useNavigate();

  const [loginUserName, setLoginUserName] = useState<string>("");
  const [loginUserPassword, setLoginUserPassword] = useState<string>("");
  const [createUserName, setcreateUserName] = useState<string>("");
  const [createUserPassword, setcreateUserPassword] = useState<string>("");

  const [accountLoginORCreate, setAccountLoginORCreate] =
    useState<boolean>(true);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit button pressed");
    navigate("/homePage", { state: true });
  };

  const handleOnLoginORCreate = (): void => {
    setAccountLoginORCreate((prev) => !prev);
  };

  return (
    <div className="container px-4 p-5 ">
      <form onSubmit={handleOnSubmit}>
        {accountLoginORCreate ? (
          <div>
            <div className="row justify-content-center justify-content-md-end">
              <div className="col-sm-5">
                <h1 className="mb-4 text-center">Login</h1>
                <label htmlFor="userName" className="form-label">
                  Enter user name
                </label>
                <input
                  className="form-control"
                  required
                  id={"userName"}
                  type={"text"}
                  value={loginUserName}
                  onChange={(e) => setLoginUserName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row justify-content-center justify-content-md-end">
              <div className="col-sm-5">
                <label className="form-label" htmlFor="userPassword">
                  Enter password
                </label>
                <input
                  className="form-control"
                  required
                  id={"userPassword"}
                  type={"password"}
                  value={loginUserPassword}
                  onChange={(e) => setLoginUserPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row justify-content-center  justify-content-md-end mt-4">
              <button className="btn btn-success col-sm-5  gy-3" type="submit">
                {"Login"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="row justify-content-center justify-content-md-end">
              <div className="col-sm-5">
                <h1 className="mb-4  text-center">Create New User</h1>
                <label className="form-label" htmlFor="userName">
                  Enter new user name
                </label>
                <input
                  className="form-control"
                  required
                  id={"userName"}
                  type={"text"}
                  value={createUserName}
                  onChange={(e) => setcreateUserName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row justify-content-center justify-content-md-end">
              <div className="col-sm-5">
                <label className="form-label" htmlFor="userPassword">
                  Enter password
                </label>
                <input
                  className="form-control"
                  required
                  id={"userPassword"}
                  type={"password"}
                  value={createUserPassword}
                  onChange={(e) => setcreateUserPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row justify-content-center  justify-content-md-end mt-4">
              <button className="btn btn-success col-sm-5  gy-3" type="submit">
                Create User
              </button>
            </div>
          </div>
        )}
        <br></br>
        <div className="row justify-content-center justify-content-md-end">
          <div className="col-sm-5 text-center text-muted ">OR</div>
        </div>
        <div className="row justify-content-center justify-content-md-end">
          <input
            type={"button"}
            className="btn btn-primary col-sm-5 gy-3"
            onClick={handleOnLoginORCreate}
            value={accountLoginORCreate ? "Create a new user" : "Login"}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AuthenticationPage;
