import { useContext, useEffect, useState } from 'react'
import AlertContext from '../../contexts/AlertContext'

const initialForm = {
  id: null,
  name: '',
  lastName: '',
  userEmail: '',
  user:'',
  address: ''
}

const FormUsers = ({addUser, userToEdit, updateUser, setUserToEdit}) => {

  const [form, setForm] = useState(initialForm)
  const {successToastB} = useContext(AlertContext)

  useEffect(() => {
    userToEdit ? setForm(userToEdit) : setForm(initialForm)
  }, [userToEdit])
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.id === null){
      addUser(form) //Validations here
      successToastB.fire({
        icon: 'success',
        title: `¡Usuario creado!`
    });
    } else {
      updateUser(form)
    }
    handleReset()
  }

  const handleReset = () => {
    setForm(initialForm)
    setUserToEdit(null)
  }

  return (
    <>
      <h4 className='mt-4'>{form.id ? `Modificar usuario N°${form.id}` : 'Agregar usuario:'}</h4>
      <form className='d-flex flex-row flex-wrap justify-content-evenly' onSubmit={handleSubmit}>
        <div className='mx-3 col'>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Apellido:
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="inputLastName"
              onChange={handleChange}
              value={form.lastName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Usuario:
            </label>
            <input
              type="text"
              name="user"
              className="form-control"
              id="inputUser"
              onChange={handleChange}
              value={form.user}
            />
          </div>
        </div>
        <div className='mx-3 col'>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email de usuario:
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="userEmail"
              onChange={handleChange}
              value={form.userEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAddress" className="form-label">
              Domicilio:
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="inputAddress"
              onChange={handleChange}
              value={form.address}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-1 submitFormBtn">
            Aplicar
          </button>
          <button className='btn btn-secondary mx-1' type='reset' onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </>
  )
}

export default FormUsers