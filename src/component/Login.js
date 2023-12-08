import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {
  const [login, setLogin] = useState({ name: "", password: "" });

  const [showPass, setShowPass] = useState("password");

  const hendelShowPass = () => {
    showPass === "password" ? setShowPass("text") : setShowPass("password");
  };

  const Error = (e) => {
    toast.error(e);
    toast.clearWaitingQueue();
  };

  const hendelLogin = (e) => {
    e.preventDefault();
    if (login.name === "" && login.password === "") {
      Error("Full Fill Details");
      props.setShowList(false);
    } else if (login.name === "") {
      Error("Enter UserName");
      props.setShowList(false);
    } else if (login.name.length <= 3) {
      Error("Username must be At Least 3 Characters");
      props.setShowList(false);
    } else if (login.password === "") {
      Error("Enter Password");
      props.setShowList(false);
    } else if (login.password.length <= 3) {
      Error("Password must be At Least 5 Characters");
      props.setShowList(false);
    } else {
      props.setShowList(true);
    }
  };


  return (
    <div
      className=""
      style={{
        background: `url(${require("./1.png")}) no-repeat center center`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <ToastContainer
        autoClose={1000}
        limit={1}
        hideProgressBar
        z-index={9999}
      />
      <div
        className=""
        style={{
          margin: "10% 32%",
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #90EE00",
          width: "30%",
          padding: "10px",
          borderRadius: "10px",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 224, 0.5), rgba(144, 238, 144, 0.5))",
          zIndex: "1000",
        }}
      >
        <div className="" style={{ fontSize: "30px" }}>
          <label
            htmlFor="username"
            className="d-block"
            style={{ fontWeight: "700", color: "#36a345" }}
          >
            User Name
          </label>
          <input
            value={login.name}
            onChange={(e) =>
              setLogin((pre) => ({ ...pre, name: e.target.value }))
            }
            type="text"
            name="name"
            id="username"
            className="input-style"
            style={{
              width: "100%",
              border: "0px transparent",
              borderRadius: "5px",
              background: "linear-gradient(to right, #f8fa82, #90EE90)",
              color: "#035231",
            }}
          />
        </div>
        <div className="" style={{ fontSize: "30px" }}>
          <label
            htmlFor="password"
            className="d-block"
            style={{ fontWeight: "700", color: "#36a345" }}
          >
            Password
          </label>
          <div>
            <input
              value={login.password}
              onChange={(e) =>
                setLogin((pre) => ({ ...pre, password: e.target.value }))
              }
              type={showPass}
              name="password"
              id="password"
              className="input-style"
              style={{
                position: "relative",
                width: "100%",
                border: "0px transparent",
                borderRadius: "5px",
                background: "linear-gradient(to left, #f8fa82, #90EE90)",
                color: "#035231",
                transition: "background 0.3s, color 0.3s",
              }}
            />

            {showPass === "text" ? (
              <i
                className="bi bi-eye"
                onClick={hendelShowPass}
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "19px",
                  cursor: "pointer",
                }}
              ></i>
            ) : (
              <i
                className="bi bi-eye-slash"
                onClick={hendelShowPass}
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "19px",
                  cursor: "pointer",
                }}
              ></i>
            )}
          </div>
        </div>
        <div className="" style={{ fontSize: "30px" }}></div>
        <div className="" style={{ marginTop: "10px" }}>
          <div
            onClick={hendelLogin}
            className="btn"
            style={{
              border: "1px solid green",
              background: "green",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
