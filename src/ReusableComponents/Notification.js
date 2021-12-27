import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Notification() {
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  const notify = () =>
    toast.promise(resolveAfter3Sec, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default Notification;
