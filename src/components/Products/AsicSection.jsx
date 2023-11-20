import AsicCard from './AsicCard'

const AsicSection = ({ asicProducts }) => {

    // console.log(asicProducts)

  return (
    <section className="row mx-2 my-0 gy-5 mt-3 mb-5 px-3 d-flex flex-wrap justify-content-evenly" id="asicProductsSection">
        {
            asicProducts && asicProducts.map((product) => (
              <AsicCard key={product.id} asicData={product}/>
            ))
        }
    </section>
  )
}

export default AsicSection