import GpuCard from "./GpuCard"

const GpuSection = ({ gpuProducts }) => {

  return (
    <section className="container">
        {
            gpuProducts && gpuProducts.map((product) => (
              <GpuCard key={++product.id} gpuData={product}/>
            ))
        }
    </section>
  )
}

export default GpuSection