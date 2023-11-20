import { createContext } from "react";
import Swal from "sweetalert2";

const AlertContext = createContext()

const AlertProvider = ({children}) => {

    const errorToast = Swal.mixin({
        toast: true,
        position: "bottom-left",
        iconColor: "#222222",
        color: "#222222",
        background: "#e63946",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });

    const errorToastB = Swal.mixin({
        toast: true,
        position: "bottom-left",
        iconColor: "#222222",
        color: "#222222",
        background: "#e63946",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    });

    const successToast = Swal.mixin({
        toast: true,
        position: "bottom-left",
        iconColor: "#222222",
        color: "#222222",
        background: "#f85e00",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });

    const successToastB = Swal.mixin({
        toast: true,
        position: "bottom-right",
        iconColor: "#222222",
        color: "#222222",
        background: "#f85e00",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    });

    const data = {errorToast, errorToastB, successToast, successToastB}

    return <AlertContext.Provider value={data}>{children}</AlertContext.Provider>
}

export default AlertContext
export {AlertProvider}