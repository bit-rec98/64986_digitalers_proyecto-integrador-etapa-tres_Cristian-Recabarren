import {useEffect, useState } from "react";

const initialForm = {
  id: null,
  image: '',
  name: '',
  model: '',
  price: '',
  currency: '',
  hashrate: '',
  algorithm: '', 
  powerUsage: '',
  available: null,
  pricing: 'BTC/USDT/US$'
}

const FormAsicProducts = ({asicProductToEdit, addAsicProduct, updateAsicProduct, setAsicProductToEdit}) => {

  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    asicProductToEdit ? setForm(asicProductToEdit) : setForm(initialForm)
  }, [asicProductToEdit])
  
  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name] : e.target.value
    })
  }
  
  const handleAsicProductSubmit = (e) => {
    e.preventDefault()
    if(form.id === null){
      addAsicProduct(form) //validate here
    } else {
      updateAsicProduct(form)
    }
    handleReset()
  }

  const handleReset = () => {
    setForm(initialForm)
    setAsicProductToEdit(null)
  }

  return (
    <>
      <h3 className="mt-4">{form.id ? `Editar producto N° ${form.id}` : "Agregar producto:"}</h3>
      <form
        className="my-3 d-flex flex-row justify-content-evenly flex-wrap"
        onSubmit={handleAsicProductSubmit}
      >
        <div className="col mx-3">
          <div className="mb-3">
            <label htmlFor="inputAsicBrand" className="form-label">
              Marca:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputAsicBrand"
              aria-describedby="AsicBrandHelp"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicModel" className="form-label">
              Modelo:
            </label>
            <input
              type="text"
              name="model"
              className="form-control"
              id="inputAsicModel"
              aria-describedby="asicModelHelp"
              onChange={handleChange}
              value={form.model}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicPrice" className="form-label">
              Precio:
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="inputAsicPrice"
              aria-describedby="asicPriceHelp"
              onChange={handleChange}
              value={form.price}
              min={1}
              max={99999999}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicCurrency" className="form-label">
              Divisas:
            </label>
            <input
              type="text"
              className="form-control"
              name="currency"
              id="inputAsicCurrency"
              aria-describedby="asicCurrencyHelp"
              onChange={handleChange}
              value={form.currency}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicHashrate" className="form-label">
              Hashrate:
            </label>
            <input
              type="text"
              className="form-control"
              name="hashrate"
              id="inputAsicHashrate"
              aria-describedby="asicHashrateHelp"
              onChange={handleChange}
              value={form.hashrate}
            />
          </div>
        </div>
        <div className="mx-3 col">
          <div className="mb-3">
            <label htmlFor="inputAsicAlgorithm" className="form-label">
              Algoritmo:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAsicAlgorithm"
              name="algorithm"
              aria-describedby="asicAlgorithmHelp"
              onChange={handleChange}
              value={form.algorithm}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicPowerUsage" className="form-label">
              Consumo energético (W):
            </label>
            <input
              type="text"
              className="form-control"
              name="powerUsage"
              id="inputAsicPowerUsage"
              aria-describedby="asicPowerUsageHelp"
              onChange={handleChange}
              value={form.powerUsage}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicAvailability" className="form-label">
              Disponibilidad:
            </label>
            <select
              className="p-2 mx-1"
              name="available"
              id="inputAsicAvailability"
              aria-describedby="asicAvailabilityHelp"
              onChange={handleChange}
              defaultValue={"Select"}
            >
              <option value={"Select"} disabled>Seleccionar...</option>
              <option onChange={handleChange} value={form.available}>Disponible</option>
              <option onChange={handleChange} value={!form.available}>No disponible</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputAsicImage" className="form-label">
              Imagen:
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              id="inputAsicImage"
              aria-describedby="asicImageHelp"
              onChange={handleChange}
              value={form.image}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-1 my-2 submitFormBtn">
            Aplicar
          </button>
          <button
            type="reset"
            className="btn btn-secondary mx-1 my-2"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormAsicProducts