import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getData, deleteData, putData } from "../server/Api";

export default function List() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [render, setRender] = useState(0);
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [editIndex, setEditIndex] = useState(null)

  const handelShoeForm = () => {
    setUser({ name: "", email: "", phone: "" });
    setShowForm(true);
  };

  const fetchData = async () => {
    try {
      let responce = await getData();
      setData(responce.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handelEdit = async (index) => {
    let responce = await getData();
    let newData = responce.data[index];
    setUser({ name: newData.name, email: newData.email, phone: newData.phone });
    setShowForm(true);
    setEditIndex(index);
  };

  const updateData = async () => {
    if(editIndex !== null){
      await putData(editIndex + 1, user)
      setRender(render + 1)
      setUser({ name: "", email: "", phone: "" });
      setEditIndex(null);
    }
  }

  const handelDelete = async (e) => {
    await deleteData(e);
    setRender(e);
  };

  useEffect(() => {
    fetchData();
  }, [render]);

  return (
    <>
      {showForm ? (
        <div className="overlay">
          <div className="form-container">
            <Form
              setShowForm={setShowForm}
              setRender={setRender}
              render={render}
              user={user}
              setUser={setUser}
              editIndex={editIndex}
              updateData={updateData}
            />
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="btn m-3 text-light"
            onClick={handelShoeForm}
            style={{ fontSize: "20px", background: "orange" }}
          >
            ADD
          </button>
        </div>
      )}
      <div className="container-fluid mt-3" style={{}}>
        <div
          className="row justify-content-between mx-2"
          style={{
            fontSize: "25px",
            fontWeight: "630",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <div className=""></div>
          <div className="col-1">No.</div>
          <div className="col-3" style={{ borderLeft: "1px solid black" }}>
            Name
          </div>
          <div className="col-3" style={{ borderLeft: "1px solid black" }}>
            Email
          </div>
          <div className="col-3" style={{ borderLeft: "1px solid black" }}>
            Phone
          </div>
          <div className="col-1"></div>
        </div>

        {data.map((e, index) => {
          return (
            <div
              key={index}
              className="row justify-content-between mx-2 mt-1"
              style={{
                fontSize: "20px",
                fontWeight: "490",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <div className="col-1">{index + 1}</div>
              <div className="col-3" style={{ borderLeft: "1px solid black" }}>
                {e.name || "-"}
              </div>
              <div className="col-3" style={{ borderLeft: "1px solid black" }}>
                {e.email || "-"}
              </div>
              <div className="col-3" style={{ borderLeft: "1px solid black" }}>
                {e.phone || "-"}
              </div>
              <div
                className="col-1 d-flex justify-content-evenly"
                style={{ borderLeft: "1px solid black" }}
              >
                
                <button
                disabled={showForm}
                  className="text-primary btn"
                  style={{ fontSize: "25px" }}
                  onClick={() => handelEdit(index)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                disabled={showForm}
                  className="text-danger btn"
                  style={{ fontSize: "25px" }}
                  onClick={() => handelDelete(e.id)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
