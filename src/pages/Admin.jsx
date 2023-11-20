import { useContext, useEffect } from "react"
import UsersTable from "../components/Admin/UsersTable"
import FormUsers from "../components/Admin/FormUsers"
import ProductsContext from "../contexts/ProductsContexts"
import SessionContext from "../contexts/SessionContext"
import GpuProductsTable from "../components/Admin/GpuProductsTable"
import AsicProductsTable from "../components/Admin/AsicProductsTable"
import FormAsicProducts from "../components/Admin/FormAsicProducts"
import FormGpuProducts from "../components/Admin/FormGpuProducts"

/* Traerse usuarios desde Gestión y sistema de registro de usuarios (modales) */

const Admin = () => {

  const {
    asicDbProducts,
    gpuDbProducts,
    createAsicProduct,
    createGpuProduct,
    updateAsicProduct,
    updateGpuProduct,
    deleteAsicProduct,
    deleteGpuProduct,
    asicProductToEdit,
    gpuProductToEdit,
    setAsicProductToEdit,
    setGpuProductToEdit,
  } = useContext(ProductsContext);

  const {
    dbUser,
    createUser,
    updateUser,
    deleteUser,
    userToEdit,
    setUserToEdit,
  } = useContext(SessionContext);

// ------------------------------------------------------------------------------------

  useEffect(() => {
    document.title = 'LTH Store - Administración'
  }, [])

  return (
    <main className="container">
      <h1 className="display-2">Área de gestión</h1>
      <hr />
      <h2 className="display-5">Registro de usuarios</h2>
      <div className="d-flex flex-column">
        <UsersTable
          users={dbUser}
          deleteUser={deleteUser}
          setUserToEdit={setUserToEdit}
        />
        <FormUsers
          userToEdit={userToEdit}
          addUser={createUser}
          updateUser={updateUser}
          setUserToEdit={setUserToEdit}
        />
      </div>
      <hr />
      <h2 className="display-5">Registro de productos</h2>
      <div className="d-flex flex-column">
        <h3 className='mt-3'>Asics:</h3>
        <AsicProductsTable
          asics={asicDbProducts}
          deleteAsicProduct={deleteAsicProduct}
          setAsicProductToEdit={setAsicProductToEdit}
        />
        <FormAsicProducts
          asicProductToEdit={asicProductToEdit}
          addAsicProduct={createAsicProduct}
          updateAsicProduct={updateAsicProduct}
          setAsicProductToEdit={setAsicProductToEdit}
          
        />
        <hr />
        <h3 className='mt-3'>Gpus:</h3>
        <GpuProductsTable
          gpus={gpuDbProducts}
          deleteGpuProduct={deleteGpuProduct}
          setGpuProductToEdit={setGpuProductToEdit}
        />
        <FormGpuProducts
          gpuProductToEdit={gpuProductToEdit}
          addGpuProduct={createGpuProduct}
          updateGpuProduct={updateGpuProduct}
          setGpuProductToEdit={setGpuProductToEdit}
        />
      </div>
    </main>
  );
}

export default Admin