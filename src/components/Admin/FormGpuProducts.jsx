import { useContext, useEffect, useState } from "react";
import AlertContext from "../../contexts/AlertContext";

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

const FormGpuProducts = ({gpuProductToEdit, addGpuProduct, updateGpuProduct, setGpuProductToEdit}) => {

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        gpuProductToEdit ? setForm(gpuProductToEdit) : setForm(initialForm)
    }, [gpuProductToEdit])
    
    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    const handleGpuProductSubmit = (e) => {
        e.preventDefault()
        if(form.id === null){
            addGpuProduct(form) //validate here
        } else {
            updateGpuProduct(form)
        }
        handleReset()
    }

    const handleReset = () => {
        setForm(initialForm)
        setGpuProductToEdit(null)
    }

return (
    <>
        <h3 className="mt-4">{form.id ? `Editar producto N° ${form.id}` : "Agregar producto:"}</h3>
        <form
            className="my-3 d-flex flex-row justify-content-evenly flex-wrap"
            onSubmit={handleGpuProductSubmit} //! Resolver ejecución acá
        >
            <div className="mx-3 col">
                <div className="mb-3">
                    <label htmlFor="inputGpuBrand" className="form-label">
                    Marca:
                    </label>
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputGpuBrand"
                    aria-describedby="gpuBrandHelp"
                    onChange={handleChange}
                    value={form.name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuModel" className="form-label">
                    Modelo:
                    </label>
                    <input
                    type="text"
                    name="model"
                    className="form-control"
                    id="inputGpuModel"
                    aria-describedby="gpuModelHelp"
                    onChange={handleChange}
                    value={form.model}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuPrice" className="form-label">
                    Precio:
                    </label>
                    <input
                    type="number"
                    className="form-control"
                    name="price"
                    id="inputGpuPrice"
                    aria-describedby="gpuPriceHelp"
                    onChange={handleChange}
                    value={form.price}
                    min={1}
                    max={99999999}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuCurrency" className="form-label">
                    Divisas:
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    name="currency"
                    id="inputGpuCurrency"
                    aria-describedby="gpuCurrencyHelp"
                    onChange={handleChange}
                    value={form.currency}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuHashrate" className="form-label">
                    Hashrate:
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    name="hashrate"
                    id="inputGpuHashrate"
                    aria-describedby="gpuHashrateHelp"
                    onChange={handleChange}
                    value={form.hashrate}
                    />
                </div>
            </div>
            <div className="mx-3 col">
                <div className="mb-3">
                    <label htmlFor="inputGpuAlgorithm" className="form-label">
                    Algoritmo:
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="inputGpuAlgorithm"
                    name="algorithm"
                    aria-describedby="gpuAlgorithmHelp"
                    onChange={handleChange}
                    value={form.algorithm}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuPowerUsage" className="form-label">
                    Consumo energético (W):
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    name="powerUsage"
                    id="inputGpuPowerUsage"
                    aria-describedby="gpuPowerUsageHelp"
                    onChange={handleChange}
                    value={form.powerUsage}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuAvailability" className="form-label">
                    Disponibilidad:
                    </label>
                    <select
                    className="p-2 mx-1"
                    name="available"
                    id="inputGpuAvailability"
                    aria-describedby="gpuAvailabilityHelp"
                    onChange={handleChange}
                    defaultValue={"Select"}
                    >
                    <option value={"Select"} disabled>Seleccionar...</option>
                    <option onChange={handleChange} value={form.available}>
                        Disponible
                    </option>
                    <option onChange={handleChange} value={!form.available}>
                        No disponible
                    </option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputGpuImage" className="form-label">
                    Imagen:
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    name="image"
                    id="inputGpuImage"
                    aria-describedby="gpuImageHelp"
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

export default FormGpuProducts