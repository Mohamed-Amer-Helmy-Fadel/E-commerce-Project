import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const notify = (msg, type) => {
    if (type === "error") {
      toast.error(msg);
    } else if (type === "success") {
      toast.success(msg);
    } else if (type === "warn") {
      toast.warn(msg);
    }
  };

  export default notify;
