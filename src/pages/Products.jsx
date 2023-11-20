import { useContext, useEffect } from "react"
import AsicSection from "../components/Products/AsicSection"
import GpuSection from "../components/Products/GpuSection"
import ProductsContext from "../contexts/ProductsContexts"

const Products = () => {

  useEffect(() => {
    document.title = 'LTH Store - Productos'
  }, [])
  
  const {gpuDbProducts, asicDbProducts} = useContext(ProductsContext)

  return (
    <main>
      <h1 className="display-3 container">Equipos de minería</h1>
      <AsicSection asicProducts={asicDbProducts}/>
      <hr className="container"/>
      <h1 className="display-3 container mt-5">Placas gráficas</h1>
      <GpuSection gpuProducts={gpuDbProducts}/>
    </main>
  )
}

export default Products