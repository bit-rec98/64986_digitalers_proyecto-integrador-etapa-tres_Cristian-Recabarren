import { useContext, useEffect } from "react"
import ThemeContext from "../contexts/ThemeContext"
import Atropos from "atropos/react"

const Home = () => {

  const {theme} = useContext(ThemeContext)


  // console.log(theme)

  // Ajustar ejecución de paleta de colores

  useEffect(() => {
    document.title = 'LTH Store - Inicio'
  }, [])
  
  return (
    <main className="container mainClass py-3">
      <section className="container about">
        <h1 className={`text-center mb-4 text-${theme === 'light' ? '' : ''}`}>¿Qué es la minería de criptomonedas?</h1>
        <section className="row d-flex container-sm container-md container-lg mb-5 mt-5">
          <p className="col-lg text-start fs-6 mx-1">
            La minería de criptomonedas es el proceso mediante el cual se generan nuevas unidades de monedas digitales, como Bitcoin y Ethereum, y se valida y asegura la red de blockchain. 
          </p>
          <p className="col-lg text-start fs-6 mx-1">
            Los mineros utilizan poderosos equipos informáticos para resolver complejos problemas matemáticos, lo que les permite agregar transacciones a la cadena de bloques y recibir recompensas en forma de criptomonedas. 
          </p>
          <p className="col-lg text-start fs-6 mx-1">
            Esta actividad es esencial para el funcionamiento del ecosistema de las criptomonedas y brinda a los entusiastas la oportunidad de participar en la creación y verificación de estas monedas digitales descentralizadas y seguras.
          </p>
        </section>
      </section>

      <section className="container carouselClass mb-5">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/GPU_RIG.jpg" className="d-block w-100" alt="carouselImage1" loading="lazy"/>
              </div>
              <div className="carousel-item">
                <img src="/img/GPU.jpg" className="d-block w-100" alt="carouselImage2" loading="lazy"/>
              </div>
              <div className="carousel-item">
                <img src="/img/ASIC.jpg" className="d-block w-100" alt="carouselImage3" loading="lazy"/>
              </div>
            </div>
          </div>
      </section>

      <section className="row d-flex container container-sm container-md container-lg mb-5 mt-5">
      <p className="col-lg fs-6 mx-2">Los mineros utilizan potentes computadoras equipadas con tarjetas gráficas o circuitos integrados de aplicación específica (ASIC) para resolver complejos algoritmos y competir por la validación de bloques en la red blockchain.
          </p>
          <p className="col-lg fs-6 mx-2">
            La minería de criptoactivos implica una conexión a internet estable y de alta velocidad, ya que los mineros necesitan estar en constante comunicación con la red para recibir y enviar datos. Un acceso confiable a internet es esencial para asegurar que los mineros puedan participar de manera efectiva en la red global de blockchain.
          </p>
          <p className="col-lg fs-6 mx-2">
            Con la combinación adecuada de recursos, conocimientos técnicos y una comprensión de las tendencias del mercado, los mineros pueden aspirar a obtener recompensas significativas en forma de criptomonedas, lo que contribuye a fortalecer la seguridad y estabilidad del ecosistema digital en constante evolución.
          </p>
      </section>

      <hr />

      <section className="container my-5 px-3 py-1" id="servicesId">
        <h2 className="my-3">Nuestros servicios</h2>
          <div className="d-flex flex-row flex-wrap justify-content-evenly">
            <ul className="col-xs-12 col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-evenly list-unstyled list-group">
              <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                <li className="my-4 p-3 list-item">Suministro de equipamiento para iniciar en la minería</li>
              </Atropos>
              <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                <li className="my-4 p-3 list-item">Servicio técnico 24/7 de manera remota y presencial</li>
              </Atropos>
              <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                <li className="my-4 p-3 list-item">Garantía con vigencia por un año</li>
              </Atropos>
              <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                <li className="my-4 p-3 list-item">Insumos de computación, periféricos y dispositivos móviles</li>
              </Atropos>
              <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                <li className="my-4 p-3 list-item">Hosting de equipamiento de minería</li>
              </Atropos>
            </ul>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-evenly">
              <p className="my-3 p-4 dataServices rounded">¿Interesado en adentrarte en el mundo de la minería de criptomonedas? Te ofrecemos un completo suministro de equipos para comenzar con confianza. Desde poderosos ASIC miners hasta GPU rigs, nuestra gama de opciones te permite elegir lo que se adapte a tus objetivos. Nuestros productos de última generación, acompañados de asesoría experta, te brindarán las herramientas necesarias para iniciar tu viaje minero de manera exitosa.</p>
              <p className="my-3 p-4 dataServices rounded">Conocé los testimonios directos de quienes confiaron en nosotros para su equipamiento de minería. Sus voces hablan por sí mismas. Nuestros clientes comparten cómo nuestros productos y atención personalizada hicieron la diferencia en su experiencia minera. Desde entusiastas hasta profesionales, nuestras soluciones de hardware de criptominería dejaron una huella duradera en cada uno.</p>
              <p className="my-3 p-4 dataServices rounded">Sabemos lo importante que es contar con un respaldo técnico sólido. Nuestro servicio técnico está disponible las 24 horas, todos los días. Ya sea a través de asistencia remota o presencial, estamos aquí para resolver cualquier inconveniente que puedas enfrentar. No importa si eres nuevo en la minería o un experto, nuestra dedicada atención asegura que tus equipos funcionen sin problemas para maximizar tus ganancias.</p>
            </div>
          </div>
      </section>
    </main>
  )
}

export default Home