import { useContext, useEffect } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Contact = () => {

    useEffect(() => {
        document.title = 'LTH Store - Contacto'
    }, [])
    
    const {theme} = useContext(ThemeContext)
    // className={`bg-${theme}`}

  return (
        <main className="container-fluid">
            <section>
                <div className="row mx-0">
                <div className="col-xs-12 col-sm-12 col-md-12 col-md-7 col-lg-7 mx-0 py-0 px-3">
                    <div className="aboutDetails px-3">
                    <h1 className="aboutItem titleTop mb-2">
                        Sobre
                        <span className="rounded p-1" id="usWord">
                        nosotros
                        </span>
                    </h1>
                    <h2 className="aboutItem">¿Qué es LTH Store?</h2>
                    <p className="px-3 aboutItem">
                        En LTH Store, nos dedicamos a proveer los insumos esenciales
                        para que puedas sumergirte en el emocionante mundo de la minería
                        de criptomonedas. Ofrecemos una amplia gama de equipos, desde
                        potentes mineros hasta componentes de calidad, diseñados para
                        optimizar tu experiencia de minería.
                        <br />
                        Nuestra pasión por la tecnología y el compromiso con la calidad
                        nos impulsan a brindarte soluciones confiables y asesoramiento
                        experto. Con LTH Store, estás respaldado por una fuente
                        confiable de herramientas y conocimientos para prosperar en la
                        minería de criptomonedas en Argentina y más allá.
                    </p>
                    </div>
                    <hr className="aboutItem" />
                    <div className="container-fluid my-4 px-3 py-3 contactForm">
                    <form
                        className="container form d-flex flex-column"
                        action="https://formspree.io/f/mnqkdnln"
                        method="POST"
                        id="contactForm"
                    >
                        <h2 className="aboutItem">
                        ¡Completá el formulario para contactarte!
                        </h2>
                        <label className="form-label mt-4 contactItem" htmlFor="name">
                        Nombre:
                        </label>
                        <input
                        className={`p-2 form-control bg-${theme}`}
                        type="text"
                        id="name"
                        placeholder="Escribe tu nombre completo..."
                        required
                        />
                        <label className="form-label mt-4 contactItem" htmlFor="email">
                        Email:
                        </label>
                        <input
                        className={`p-2 form-control bg-${theme}`}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ejemplo@email.com"
                        required
                        />
                        <label
                        className="form-label mt-4 contactItem"
                        htmlFor="textBox"
                        >
                        ¡Dejanos un mensaje!
                        </label>
                        <textarea
                        className={`p-2 form-control bg-${theme}`}
                        name="textBox"
                        id="textBox"
                        rows="6"
                        placeholder="Escribí tu mensaje..."
                        ></textarea>
                        <button className="btn mt-3 fs-5" id="sendFormItem">
                        Enviar
                        </button>
                    </form>
                    </div>
                </div>
                <iframe
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-4 px-0 mx-2 mb-5 rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217955.00184323578!2d-64.35902541600714!3d-31.399054706621524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1691437554022!5m2!1ses!2sar"
                    width={420}
                    height={820}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <hr />
                <div className="container mt-5">
                <h2 className="aboutItem">Nuestros clientes</h2>
                <div className="container insights row d-flex justify-content-between mt-2 mb-5 mx-0 p-1">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 mx-1 my-3 aboutItem">
                    <h6>María G. - Buenos Aires:</h6>
                    <p className="text-start">
                        "Increíble experiencia con la compra de mi primer equipo de
                        minería. La asesoría personalizada fue clave para tomar la
                        decisión correcta. El equipo funciona a la perfección, y el
                        servicio técnico es excepcional."
                    </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 mx-1 my-3 aboutItem">
                    <h6>Carlos M. - Córdoba:</h6>
                    <p className="text-start">
                        "No podría estar más satisfecho con la compra de mi ASIC. El
                        rendimiento superó mis expectativas y la garantía de un año me
                        da mucha tranquilidad. ¡Definitivamente recomiendo esta
                        empresa!"
                    </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 mx-1 my-3 aboutItem">
                    <h6>Lorena P. - Rosario:</h6>
                    <p className="text-start">
                        "El hosting de mi equipo de minería ha sido una solución
                        increíblemente conveniente. La atención al cliente siempre está
                        disponible y he experimentado cero interrupciones en mi
                        operación. ¡Gracias por simplificar mi vida minera!"
                    </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 mx-1 my-3 aboutItem">
                    <h6>Laura C. - La Plata:</h6>
                    <p className="text-start">
                        "El servicio técnico 24/7 es un salvavidas. Me ayudaron a
                        resolver un problema de configuración en minutos, incluso
                        durante la madrugada. ¡Son profesionales y amigables al mismo
                        tiempo!"
                    </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 mx-1 my-3 aboutItem">
                    <h6>Javier A. - Neuquén:</h6>
                    <p className="text-start">
                        "Mi experiencia con el equipo de minería GPU ha sido altamente
                        rentable. No solo el equipo es eficiente, sino que la comunidad
                        en línea de la empresa me ha proporcionado valiosos consejos
                        para optimizar mi rendimiento."
                    </p>
                    </div>
                </div>
                </div>
            </section>
        </main>
  );
}

export default Contact