import List from "./component/List";
import Login from "./component/Login";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showList, setShowList] = useState(false);

  if (showList === true) {
    toast.success("Login Successfully");
    toast.clearWaitingQueue();
  }

  return (
    <>
      {showList ? <List /> : <Login setShowList={setShowList} />}{" "}
      <ToastContainer
        autoClose={1000}
        limit={1}
        hideProgressBar
      />
    </>
  );
}

export default App;
