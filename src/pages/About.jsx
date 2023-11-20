import { useContext, useEffect } from "react"
import ThemeContext from "../contexts/ThemeContext"
import Atropos from "atropos/react"

const About = () => {

    useEffect(() => {
        document.title = 'LTH Store - Acerca de la minería'
    }, [])
    
    const {theme} = useContext(ThemeContext)

  return (
    <main className="container">
        <section className="container">
            <h1 className="title text-center display-5">Información útil y recomendaciones</h1>
            <ul className="list-unstyled row my-5">
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-8 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Ubicación adecuada:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Colocá los equipos de minería en un lugar bien ventilado y libre de obstrucciones para evitar el sobrecalentamiento. Evitá espacios cerrados o con poca circulación de aire, ya que esto puede afectar el rendimiento de tus equipos.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Control de temperatura:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Mantené una temperatura ambiente óptima para tus equipos. Evitá cambios bruscos de temperatura, ya que pueden afectar su funcionamiento y durabilidad.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Energía estable:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Conectá tus equipos a fuentes de energía estables y protegidas contra picos eléctricos. Te recomendamos considerar el uso de reguladores de voltaje o sistemas de respaldo para asegurarte un suministro constante.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-8 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Organización del cableado:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Asegurate de mantener los cables ordenados y bien gestionados. Esto no solo facilitará la circulación del aire, sino que también prevendrá enredos que puedan causar inconvenientes.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Limpieza regular:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Realizá limpiezas periódicas para evitar la acumulación de polvo y suciedad en los componentes. Utilizá aire comprimido y herramientas adecuadas para mantener tus equipos en óptimas condiciones.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Actualización de software:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Mantené siempre actualizado el software de tus equipos y las aplicaciones de minería. Las actualizaciones suelen incluir mejoras de rendimiento y seguridad.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-3 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                        <h5 className="my-2 mx-2">Monitoreo constante:</h5>
                        <p className="d-inline-block mx-2 my-2">
                            Utilizá herramientas de monitoreo para supervisar la temperatura, el consumo de energía y el rendimiento de tus equipos. Detectar problemas a tiempo es clave para prevenir daños mayores.
                        </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Diversificación de criptomonedas</h5>
                            <p className="d-in2ine-block mx-2 my-1">
                                Tené en cuenta la posibilidad de minar diferentes criptomonedas según la rentabilidad y las condiciones del mercado. La diversificación puede ayudarte a reducir riesgos.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-6 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Respaldo de datos:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Realizá copias de respaldo de tus configuraciones y datos importantes de minería. Esto te permitirá recuperar la información en caso de fallas o inconvenientes.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Mantenimiento preventivo:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Programá mantenimientos preventivos regulares para inspeccionar y mantener tus equipos en condiciones óptimas. Esto alargará su vida útil y mejorará su rendimiento.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Seguridad informática:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Mantené una sólida seguridad cibernética. Utilizá contraseñas seguras, activá la autenticación de dos factores y mantén tus sistemas actualizados para prevenir posibles ataques.
                            </p>
                        </Atropos>
                    </li>
                    <li className="infoItem col-xs-12 col-sm-12 col-md-6 col-lg-4 my-2 mx-0 p-3">
                        <Atropos className="atroposElement rounded p-1 m-1" shadow={false} highlight={true} data-atropos-offset={5}>
                            <h5 className="my-2 mx-2">Educación continua:</h5>
                            <p className="d-inline-block mx-2 my-2">
                                Mantenete informado sobre las últimas tendencias y avances en la minería de criptomonedas. La educación constante te permitirá tomar decisiones más informadas y adaptarte a los cambios del mercado.
                            </p>
                        </Atropos>
                    </li>
                
            </ul>
        </section>

        <hr />

        <section className="container my-5">
            <h2 className="title display-5">Recursos externos</h2>
            <div className="row my-3 d-flex justify-content-center">
                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://www.binance.com/es" rel="noreferrer"><img src="/img/logo/Binance-Logo.wine.svg" className="card-img-top" alt="binance" loading="lazy"/></a>
                    </div>
                        <div className="card-body">
                        <a href="https://www.binance.com/es" className="resourceLink text-decoration-none" rel="noreferrer"><h5>Binance</h5></a>
                        <a className="card-text text-decoration-none resourceLink" href="https://www.binance.com/es">Binance es uno de los exchanges líderes a nivel mundial, ofreciendo una plataforma segura y avanzada para comprar, vender y operar con una amplia gama de criptomonedas.</a>
                    </div>
                </div>

                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://cuex.com/es/" target="_blank" rel="noreferrer"><img src="/img/logo/cuex.png" className="card-img-top p-2 my-4" alt="cuex" loading="lazy"/></a>
                    </div>
                    <div className="card-body">
                        <a href="https://cuex.com/es/" className="resourceLink text-decoration-none" target="_blank" rel="noreferrer"><h5>CUEX - Conversor de divisas</h5></a>
                        <a href="https://cuex.com/es/" className="card-text text-decoration-none resourceLink" target="_blank" rel="noreferrer">Con CUEX, podrás calcular al instante el valor de criptomonedas y monedas locales en distintas tasas de cambio. Simplificá tus cálculos financieros y operaciones con esta herramienta confiable y de fácil uso.</a>
                    </div>
                </div>

                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://whattomine.com/" target="_blank" rel="noreferrer"><img src="/img/logo/whattomine.svg" className="card-img-top my-5" alt="whattomine" loading="lazy"/></a>
                    </div>
                    <div className="card-body">
                        <a href="https://whattomine.com/" className="resourceLink text-decoration-none" target="_blank" rel="noreferrer"><h5>WhatToMine</h5></a>
                        <a href="https://whattomine.com/" className="card-text text-decoration-none resourceLink" target="_blank" rel="noreferrer">
                            En Whattomine, podrás simular la capacidad de diferentes tipos de hardware, desde ASIC miners hasta GPU rigs, ajustando configuraciones según tus necesidades. 
                        </a>
                    </div>
                </div>
                
                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://www.asicminervalue.com/" target="_blank" rel="noreferrer"><img src="/img/logo/asicminervalue.png" className="card-img-top my-5 p-1 rounded" alt="asicminervalue" loading="lazy"/></a>
                        
                    </div>
                    <div className="card-body">
                        <a href="https://www.asicminervalue.com/" className="resourceLink text-decoration-none" target="_blank" rel="noreferrer"><h5>Asic Miner Value</h5></a>
                        <a href="https://www.asicminervalue.com/" className="card-text text-decoration-none resourceLink" target="_blank" rel="noreferrer">Esta herramienta te brinda una visión completa de las opciones disponibles en el mercado, permitiéndote tomar decisiones informadas al seleccionar el equipo que mejor se adapte a tus objetivos y recursos.</a>
                    </div>
                </div>

                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://cryptoavisos.com/comercio/rec-lithium" target="_blank" rel="noreferrer"><img src="/img/logo/cryptoavisos.png" className="card-img-top my-5 p-1" alt="cryptoavisos"/></a>
                    </div>
                    <div className="card-body">
                        <a href="https://cryptoavisos.com/comercio/rec-lithium" className="resourceLink text-decoration-none" target="_blank" rel="noreferrer"><h5>CryptoAvisos</h5></a>
                        <a href="https://cryptoavisos.com/comercio/rec-lithium" className="card-text text-decoration-none resourceLink" target="_blank" rel="noreferrer">Descubrí nuestro perfil en el mercado p2p líder en Argentina. En CryptoAvisos, LTH Store te presenta una selección de productos mineros y de insumos para la minería de criptomonedas.</a>
                    </div>
                </div>

                <div className={`card externalResources col-4 mx-3 gy-3 bg-${theme}`} style={{width: '18rem'}}>
                    <div className="imgBackground p-1 mt-2 rounded">
                        <a href="https://es.tradingview.com/" target="_blank" rel="noreferrer"><img src="/img/logo/tradingviewlogo.png" className="card-img-top my-5 p-1" alt="tradingview" loading="lazy"/></a>
                    </div>
                    <div className="card-body">
                        <a href="https://es.tradingview.com/" className="resourceLink text-decoration-none" target="_blank" rel="noreferrer"><h5>TradingView</h5></a>
                        <a href="https://es.tradingview.com/" className="card-text text-decoration-none resourceLink" target="_blank" rel="noreferrer">Con TradingView, podrás explorar gráficos interactivos y completos para rastrear el mercado de criptomonedas. Personalizá tus análisis con indicadores técnicos, patrones de precios y herramientas avanzadas.</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default About