import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalContext from "../../contexts/ModalContext";
import ThemeContext from "../../contexts/ThemeContext";
import SessionContext from "../../contexts/SessionContext";
import AlertContext from "../../contexts/AlertContext";
import { getItem } from "../../utils/http";
import PasswordVisibilityContext from "../../contexts/PasswordVisibilityContext";

    const initialForm = {
    id: null,
    name: "",
    lastName: "",
    user: "",
    address: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    };

    const RegisterModal = () => {
        const {
            showRegister,
            handleRegisterModalClose,
            handleRegisterModalDirectClose,
        } = useContext(ModalContext);
        const { theme } = useContext(ThemeContext);

        const { createUser, connectSession, setShowEnabledButtons} = useContext(SessionContext);
        const {successToast, errorToast, errorToastB} = useContext(AlertContext)
        const {showRegisterPassword ,handleRegisterPasswordVisibility} = useContext(PasswordVisibilityContext)

        const [form, setForm] = useState(initialForm);

        const handleChange = (e) => {
            setForm({
            ...form,
            [e.target.name]: e.target.value,
            });
        };

        const urlUsersDb = import.meta.env.VITE_PORT_USERS;
        const handleUsersRegistered = async () => {
            try {
                const usersDb = await getItem(urlUsersDb)
                const isUserRegistered = usersDb.some(user => user.email === form.userEmail || user.user === form.user)
                const isPasswordValid = isValidPassword(form.password);

                if(isUserRegistered){
                    errorToast.fire({
                        icon: 'error',
                        title: '¡Usuario ya registrado!'
                    });
                } else if(!isValidEmail(form.userEmail)){
                    errorToastB.fire({
                        icon: 'error',
                        title: '¡Tu usuario debe incluir @ y la correspondiente extensión con punto (.com/.net/.ar/.io), según corresponda!'
                    });
                } else if (!isPasswordValid) {
                    errorToastB.fire({
                        icon: 'error',
                        title: 'Tu contraseña debe tener un mínimo de 8 caracteres y tenés que usar números, letras mayúsculas/minúsculas y símbolos.',
                    });
                } else {
                    connectSession(form);
                    createUser(form);
                    successToast.fire({
                    icon: 'success',
                    title: `¡Bienvenido/a! ${form.user}`
                });
                }
                
            } catch (error) {
                console.error(`Error while checking users: ${error.message}`)
            }
        }

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValidPassword = (password) => {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            return passwordRegex.test(password);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            handleUsersRegistered()
            handleReset();
        };

        const handleReset = () => {
            setForm(initialForm);
        };

        const handleClick = () => {
            const submitBtn = document.getElementById('submitRegisterBtn')
            submitBtn.click()
            handleRegisterModalDirectClose()
            setShowEnabledButtons(true)
        }

        return (
            <Modal
            id="logInUpModal"
            show={showRegister}
            onHide={() => handleRegisterModalDirectClose()}
            >
            <Modal.Header closeButton className={`bg-${theme}`}>
                <Modal.Title>Iniciá sesión o registrate</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${theme}`}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputRegisterUserFirstName" className="form-label">
                        Nombre:
                        </label>
                        <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="inputRegisterUserFirstName"
                        onChange={handleChange}
                        value={form.userFirstName}
                        required
                        aria-describedby="fisrtNameHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRegisterLastName" className="form-label">
                        Apellido:
                        </label>
                        <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        id="inputRegisterUserLastName"
                        onChange={handleChange}
                        value={form.lastName}
                        required
                        aria-describedby="lastNameHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRegisterUser" className="form-label">
                        Usuario:
                        </label>
                        <input
                        type="text"
                        name="user"
                        className="form-control"
                        id="inputRegisterUser"
                        onChange={handleChange}
                        value={form.user}
                        required
                        aria-describedby="addressHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRegisterUserAddress" className="form-label">
                        Domicilio:
                        </label>
                        <input
                        type="text"
                        name="address"
                        className="form-control"
                        id="inputRegisterUserAddress"
                        onChange={handleChange}
                        value={form.address}
                        required
                        aria-describedby="addressHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRegisterEmail" className="form-label">
                        Correo electrónico:
                        </label>
                        <input
                        type="email"
                        className={`form-control bg-${theme}`}
                        id="inputRegisterEmail"
                        aria-describedby="emailHelp"
                        name="userEmail"
                        required
                        onChange={handleChange}
                        value={form.email}
                        />
                        <div id="emailHelp" className="form-text">
                        Nunca compartiremos tu email con entidades externas
                        </div>
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-stretch justify-content-evenly">
                        <label htmlFor="inputRegisterPassword" className="form-label">
                        Contraseña:
                        </label>
                        <div className="d-flex flex-row align-items-center justify-content-evenly mb-2">
                            <input
                                type="password"
                                className={`form-control bg-${theme}`}
                                id="inputRegisterPassword"
                                aria-describedby="passwordHelp"
                                minLength="4"
                                maxLength="20"
                                required
                                name="password"
                                onChange={handleChange}
                                value={form.password}
                            />
                            <span className="material-symbols-sharp ms-2 d-block" onClick={handleRegisterPasswordVisibility} id="registerPasswordVisibility">
                                {showRegisterPassword ? `visibility_off` : `visibility`}
                            </span>
                        </div>
                        <label
                        htmlFor="inputConfirmRegisterPassword"
                        className="form-label"
                        >
                        Confirmar contraseña:
                        </label>
                        <div className="d-flex flex-row align-items-center justify-content-evenly">
                        <input
                            type="password"
                            className={`form-control bg-${theme}`}
                            id="inputConfirmRegisterPassword"
                            aria-describedby="passwordHelp"
                            minLength="4"
                            maxLength="20"
                            required
                            name="confirmPassword"
                            onChange={handleChange}
                            value={form.confirmPassword}
                        />
                        </div>
                        <div id="passwordHelp" className="form-text">
                        Tu contraseña debe tener un mínimo de 8 caracteres y tenés que
                        usar números, letras mayúsculas/minúsculas y símbolos.
                        </div>
                    </div>
                    <input className="d-none" type="submit" id="submitRegisterBtn" />
                </form>
            </Modal.Body>
            <Modal.Footer className={`bg-${theme}`}>
                <Button variant="secondary" onClick={() => handleRegisterModalClose()}>
                Cancelar
                </Button>
                <Button id="submitRegisterButton" onClick={handleClick}>Registrarse</Button>
            </Modal.Footer>
            </Modal>
        );
};

export default RegisterModal;