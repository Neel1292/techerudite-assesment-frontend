import { Bounce, toast } from "react-toastify";

const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    draggable: false,
    theme: "colored",
    transition: Bounce,
};

function showToast(showType, message) {
    if (!message) {
        console.warn("Toast message is required.");
        return;
    }

    const toastTypes = {
        success: toast.success,
        error: toast.error,
        info: toast.info,
        warning: toast.warning,
    };

    if (toastTypes[showType]) {
        toastTypes[showType](message, toastConfig);
    }
}

export default showToast;