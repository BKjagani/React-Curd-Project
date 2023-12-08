import React from "react";
import { postData } from "../server/Api";

export default function Form(props) {
  const hendelSubmit = async () => {
    props.setRender(props.render + 1);
    if (
      props.user.name === "" &&
      props.user.email === "" &&
      props.user.phone === ""
    ) {
    } else if (props.editIndex !== null) {
      props.updateData();
    } else {
      try {
        await postData(props.user);
      } catch (error) {
        console.log(error.message);
      }
    }
    props.setShowForm(false);
  };

  return (
    <div
      className=""
      style={{
        margin: "10% 32%",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #7c7d7d",
        width: "40%",
        padding: "10px",
        borderRadius: "10px",
        background:
          "linear-gradient(to right, rgba(255, 255, 244), rgba(250, 255, 244))",
        zIndex: "1000",
      }}
    >
      <div className="" style={{ fontSize: "30px" }}>
        <label
          htmlFor="username"
          className="d-block"
          style={{ fontWeight: "500", color: '#3e4040' }}
        >
          Write Your Full Name
        </label>
        <input
          value={props.user.name}
          onChange={(e) => {
            props.setUser((pre) => ({ ...pre, name: e.target.value }));
          }}
          type="text"
          name="name"
          id="username"
          className="input-style"
          style={{
            width: "100%",
            border: "0px transparent",
            borderRadius: "5px",
            background: "#e4e6e3",
            color: "black",
          }}
          required
        />
      </div>
      <div className="" style={{ fontSize: "30px" }}>
        <label
          htmlFor="email"
          className="d-block "
          style={{ fontWeight: "500" }}
        >
          Write Your Email ID
        </label>
        <input
          value={props.user.email}
          onChange={(e) => {
            props.setUser((pre) => ({ ...pre, email: e.target.value }));
          }}
          type="text"
          name="email"
          id="email"
          className="input-style"
          style={{
            width: "100%",
            border: "0px transparent",
            borderRadius: "5px",
            background: "#e4e6e3",
            color: "black",
            transition: "background 0.3s, color 0.3s",
          }}
          required
        />
      </div>
      <div className="" style={{ fontSize: "30px" }}>
        <label
          htmlFor="phone"
          className="d-block"
          style={{ fontWeight: "500", color: "" }}
        >
          Write Your Phone No.
        </label>
        <input
          value={props.user.phone}
          onChange={(e) => {
            props.setUser((pre) => ({ ...pre, phone: e.target.value }));
          }}
          type="tel"
          name="phone"
          id="phone"
          className="input-style"
          style={{
            width: "100%",
            border: "0px transparent",
            borderRadius: "5px",
            background: "#e4e6e3",
            color: "black",
          }}
          pattern="[0-9]{10}"
          required
        />
      </div>
      <div className="" style={{ marginTop: "10px" }}>
        <div
          className="btn"
          onClick={hendelSubmit}
          style={{
            border: "1px solid green",
            background: "green",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Submit
        </div>
        <div
          className="btn"
          onClick={() => props.setShowForm(false)}
          style={{
            border: "1px solid red",
            marginLeft: "10px",
            background: "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
