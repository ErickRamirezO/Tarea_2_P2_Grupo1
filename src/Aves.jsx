import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './categoria.css';
import './modal.css';
//Imagenes

export default function () {
  return (
    <div>

      <nav className="navPr">
        <div className="logo">
          <img src="../img/logo.png" alt="Nombre del Logo"/>
        </div>
          <div className="menu"><a href="/" className="menup ">Inicio</a></div>
          <div className="menu"><a href="#" className="menup ">Categorias</a>
              <ul className="submenu">
                  <li className="submenup"><a href="/anfibios">Anfibios</a></li>
                  <li className="submenup"><a href="/aves">Aves</a></li>
              </ul>

          </div>
          <div className="menu"><a href="/horarios" className="menup " >Horarios</a></div>
          <div className="menu"><a href="/eventos" className="menup ">Evento</a></div>
      </nav>

        <nav className="navNuevo">
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
            <i>&#9776;</i>
          </label>
          <ul>
            <li><a className="activate " href="/">Inicio</a></li>
            <li><a href="/horarios">Horario</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/anfibios">Anfibios</a></li>
            <li><a href="/aves">Aves</a></li>
          </ul>
        </nav>

                              <div className="modal fade" id="myModal" tabIndex="-1" data-backdrop="static" data-keyboard="true" aria-labelledby="myModalLabel">
                                <div className="modal-dialog modal-lg modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="myModalLabel">Colibrí Pechinegro (Aglaeactis aliciae)</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container">
                                            <br/>
                                                <div id="theCarousel" className="carousel slide" data-ride="carousel">
                                                    
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
                                                        <li data-target="#theCarousel" data-slide-to="1"></li>
                                                        <li data-target="#theCarousel" data-slide-to="2"></li>
                                                    </ol>

                                                    <div className="carousel-inner" role="listbox">
                                                        <div className="item active">
                                                            <img src="../img/categoria/aves/colibri1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                                            <div className="carousel-caption d-none d-md-block">
                                                                <h3>Plumaje distintivo</h3>
                                                                <p>El Colibrí Pechinegro presenta un plumaje caracterizado por tonos oscuros y metálicos. El macho tiene un plumaje predominantemente negro en la parte superior, mientras que la hembra tiene colores más apagados y menos llamativos.</p>
                                                            </div>
                                                        </div>

                                                        <div className="item">
                                                            <img src="../img/categoria/aves/colibri2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                                            <div className="carousel-caption d-none d-md-block">
                                                                <h3>Marcado parche púrpura en la garganta</h3>
                                                                <p>Una de las características más distintivas de esta especie es el parche púrpura brillante en la garganta de los machos. Este detalle a menudo se destaca en contraste con el resto del plumaje oscuro.</p>
                                                            </div>
                                                        </div>

                                                        <div className="item">
                                                            <img src="../img/categoria/aves/colibri3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                                            <div className="carousel-caption d-none d-md-block"><br/>
                                                                <h3>Comportamiento territorial y alimentación</h3>
                                                                <p>Estos colibríes son conocidos por su comportamiento territorial. Defienden agresivamente sus territorios de alimentación, que suelen estar asociados con parches de flores ricas en néctar. Se alimentan principalmente de néctar, utilizando su largo pico y su capacidad para el vuelo estacionario para acceder a las flores.</p>
                                                            </div>
                                                        </div>

                                                        <a className="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
                                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                            <span className="sr-only">anterior</span>
                                                        </a>
                                                        <a className="right carousel-control" href="#theCarousel" role="button" data-slide="next">
                                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                            <span className="sr-only">siguiente</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>

                             
                              <div className="modal fade" id="myModal1" tabIndex="-1" data-backdrop="static" data-keyboard="true" aria-labelledby="myModalLabel">
                                  <div className="modal-dialog modal-lg modal-dialog-centered">
                                      <div className="modal-content">
                                          <div className="modal-header">
                                              <h4 className="modal-title" id="myModalLabel">Sapo Corredor</h4>
                                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                                          </div>
                                          <div className="modal-body">
                                              <div className="container">
                                                  <br/>
                                                  <div id="theCarousel1" className="carousel slide" data-ride="carousel">
                                                      
                                                      <ol className="carousel-indicators">
                                                          <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
                                                          <li data-target="#theCarousel" data-slide-to="1"></li>
                                                          <li data-target="#theCarousel" data-slide-to="2"></li>
                                                      </ol>

                                                      <div className="carousel-inner" role="listbox">
                                                          <div className="item active">
                                                              <img src="../img/categoria/aves/trepador1.jpeg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block">
                                                                  <h3>Plumaje grisáceo con detalle amarillo en la cabeza</h3>
                                                                  <p>El Trepador de Páramo tiene un plumaje predominantemente grisáceo en el cuerpo, pero presenta un distintivo parche amarillo brillante en la cabeza, lo que lo hace fácilmente reconocible.</p>
                                                              </div>
                                                          </div>

                                                          <div className="item">
                                                              <img src="../img/categoria/aves/trepador2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block">
                                                                  <h3>Cola larga y puntiaguda</h3>
                                                                  <p>Esta especie se caracteriza por tener una cola larga y puntiaguda, lo que le proporciona estabilidad y ayuda durante sus actividades de búsqueda de alimento en ambientes de páramo.</p>
                                                              </div>
                                                          </div>

                                                          <div className="item">
                                                              <img src="../img/categoria/aves/trepador3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block"><br/>
                                                                  <h3>Comportamiento de búsqueda activa</h3>
                                                                  <p>El Trepador de Páramo es conocido por su comportamiento activo de búsqueda de alimento. Se desplaza rápidamente entre las ramas y arbustos, explorando activamente para encontrar insectos y otros invertebrados de los cuales se alimenta.</p>
                                                              </div>
                                                          </div>

                                                          <a className="left carousel-control" href="#theCarousel1" role="button" data-slide="prev">
                                                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                              <span className="sr-only">anterior</span>
                                                          </a>
                                                          <a className="right carousel-control" href="#theCarousel1" role="button" data-slide="next">
                                                              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                              <span className="sr-only">siguiente</span>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className="modal fade" id="myModal2" tabIndex="-1" data-backdrop="static" data-keyboard="true" aria-labelledby="myModalLabel">
                                  <div className="modal-dialog modal-lg modal-dialog-centered">
                                      <div className="modal-content">
                                          <div className="modal-header">
                                              <h4 className="modal-title" id="myModalLabel">Jilguero de Anteojos (Spinus ophthalmicus)
                              </h4>
                                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                                          </div>
                                          <div className="modal-body">
                                              <div className="container">
                                                  <br/>
                                                  <div id="theCarousel2" className="carousel slide" data-ride="carousel">
                                                     
                                                      <ol className="carousel-indicators">
                                                          <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
                                                          <li data-target="#theCarousel" data-slide-to="1"></li>
                                                          <li data-target="#theCarousel" data-slide-to="2"></li>
                                                      </ol>

                                                      <div className="carousel-inner" role="listbox">
                                                          <div className="item active">
                                                              <img src="../img/categoria/aves/jilguero1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block">
                                                                  <h3>Plumaje amarillo y negro</h3>
                                                                  <p>El jilguero andino presenta un plumaje amarillo brillante en la mayor parte de su cuerpo, con marcas negras en la cabeza, espalda y alas. Los machos y las hembras suelen tener colores similares, aunque a veces los machos pueden exhibir tonos más vibrantes.</p>
                                                              </div>
                                                          </div>

                                                          <div className="item">
                                                              <img src="../img/categoria/aves/jilguero2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block">
                                                                  <h3>Anteojos amarillos alrededor de los ojos </h3>
                                                                  <p>Una característica distintiva de esta especie es la presencia de un anillo o "anteojos" amarillos alrededor de los ojos, que contrasta con el plumaje oscuro alrededor de la cabeza.</p>
                                                              </div>
                                                          </div>

                                                          <div className="item">
                                                              <img src="../img/categoria/aves/jilguero3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                                              <div className="carousel-caption d-none d-md-block"><br/>
                                                                  <h3>Alimentación principalmente de semillas</h3>
                                                                  <p>Esta especie se alimenta principalmente de semillas, y a menudo se le observa en grupos buscando alimento entre la vegetación de páramo. También puede consumir insectos y otros pequeños invertebrados.</p>
                                                              </div>
                                                          </div>

                                                          <a className="left carousel-control" href="#theCarousel2" role="button" data-slide="prev">
                                                              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                              <span className="sr-only">anterior</span>
                                                          </a>
                                                          <a className="right carousel-control" href="#theCarousel2" role="button" data-slide="next">
                                                              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                              <span className="sr-only">siguiente</span>
                                                          </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                                <div className="modal fade" id="myModal3" tabIndex="-1" data-backdrop="static" data-keyboard="true" aria-labelledby="myModalLabel">
                                    <div className="modal-dialog modal-lg modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="myModalLabel">Pájaro Carpintero Andino (Veniliornis kirkii)</h4>
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="container">
                                                    <br/>
                                                    <div id="theCarousel3" className="carousel slide" data-ride="carousel">
                                                     
                                                        <ol className="carousel-indicators">
                                                            <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
                                                            <li data-target="#theCarousel" data-slide-to="1"></li>
                                                            <li data-target="#theCarousel" data-slide-to="2"></li>
                                                        </ol>

                                                        <div className="carousel-inner" role="listbox">
                                                            <div className="item active">
                                                                <img src="../img/categoria/aves/carpintero1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                                                <div className="carousel-caption d-none d-md-block">
                                                                    <h3>Plumaje distintivo</h3>
                                                                    <p>El Carpintero Ventriocre tiene un plumaje llamativo con una combinación de colores que incluyen negro, blanco y rojo. Suele tener un patrón de rayas en la cabeza y una mancha roja en la nuca.</p>
                                                                </div>
                                                            </div>

                                                            <div className="item">
                                                                <img src="../img/categoria/aves/carpintero2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                                                <div className="carousel-caption d-none d-md-block">
                                                                    <h3>Hábitat de bosques montanos y páramos</h3>
                                                                    <p>Este pájaro carpintero se encuentra en hábitats de bosques montanos y páramos en América del Sur, incluyendo regiones en Colombia, Ecuador y Perú.</p>
                                                                </div>
                                                            </div>

                                                            <div className="item">
                                                                <img src="../img/categoria/aves/carpintero3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                                                <div className="carousel-caption d-none d-md-block"><br/>
                                                                    <h3>Alimentación y comportamiento de tamborileo</h3>
                                                                    <p>Como otros pájaros carpinteros, se alimenta principalmente de insectos y larvas que encuentra perhtmlForando la corteza de los árboles. También utiliza el tamborileo como medio de comunicación para establecer territorio y atraer pareja durante la temporada de reproducción.</p>
                                                                </div>
                                                            </div>

                                                            <a className="left carousel-control" href="#theCarousel3" role="button" data-slide="prev">
                                                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                                <span className="sr-only">anterior</span>
                                                            </a>
                                                            <a className="right carousel-control" href="#theCarousel3" role="button" data-slide="next">
                                                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                                <span className="sr-only">siguiente</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

      <div className="animal-info">
        <div className="cont_imgAnimal"><img src="../img/categoria/aves/colibri.jpg"
            alt="Imagen del animal" className="animal-image btn btn-primary" data-toggle="modal" data-target="#myModal"/></div>
        <div className="animal-details">
          <h3 className="titulo_animal">Colibrí Pechinegro (Aglaeactis aliciae)</h3>
          <div className="descripcion_animal">
            <p>El colibrí pechinegro es una especie pequeña y vibrante con plumaje predominantemente negro en la parte superior y un distintivo parche púrpura en la garganta. Los machos suelen tener colores más llamativos que las hembras. Colibrí de apariencia manchada, restringido a una pequeña y remota área en los Andes del norte de Perú. Su plumaje es marrón-bronceado con irregulares manchas blancas en la cara, la garganta y el vientre, además en el pecho posee otras manchas del mismo color en htmlForma de lágrima. El macho adulto tiene la parte inferior de la espalda púrpura y verde iridiscente, la cual es borrosa o ausente en las hembras y en los juveniles.</p>
          </div>
          <div className="localizacion_animal">
            <p className="text_localizacion">Localización</p>
            <div className="tipos_caracteristicas">
            <p>Endémico de la región andina en Ecuador, se encuentra especialmente en las áreas montañosas de la sierra.</p>
            </div>
          </div>
          <div className="costumbres">
            <p className="text_costumbres">Costumbres:</p>
            <p> Es conocido por su comportamiento territorial y agresivo. Se alimenta principalmente de néctar de flores, utilizando su largo pico y su habilidad para el vuelo estacionario.</p>
          </div>
        </div>
      </div>

      <div className="animal-info">
        <div className="cont_imgAnimal"><img src="../img/categoria/aves/trepador.jpg"
            alt="Imagen del animal" className="animal-image btn btn-primary" data-toggle="modal" data-target="#myModal1"/></div>
        <div className="animal-details">
          <h3 className="titulo_animal">Trepador de Páramo (Anairetes alpinus)</h3>
          <div className="descripcion_animal">
            <p>El trepador de páramo es un ave pequeña con un plumaje grisáceo y un parche distintivo de color amarillo brillante en la cabeza. Su cola larga y puntiaguda es característica. El Torito de Pecho Cenizo es todo gris con un centro pálido del vientre y dos anchas barras blancas en las alas. Tiene una cresta de plumas negras y un parche blanco en la corona. El pico es negro. Las plumas exteriores de la cola son blancas. Se asocia con bosques de Polylepis y matorrales adyacentes. Es inconfundible en su hábitat especializado y área de distribución limitada, pero vea al Tijeral de Ceja Blanca.</p>
          </div>
          <div className="localizacion_animal">
            <p className="text_localizacion">Localización</p>
            <div className="tipos_caracteristicas">
            <p> Endémico de las áreas de páramo en la sierra ecuatoriana, se encuentra en altitudes elevadas.</p>
            </div>
          </div>
          <div className="costumbres">
            <p className="text_costumbres">Costumbres:</p>
            <p>Es un especialista en trepar por la vegetación densa de los páramos en busca de insectos y larvas. Su cola le proporciona estabilidad mientras se desplaza entre las ramas.</p>
          </div>
        </div>
      </div>
<footer className="page-footer red darken-4" style={{padding: "20px 0 0 0"}}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Zoologico MRP</h5>
              <p className="grey-text text-lighten-4">La experiencia va más allá de simplemente observar animales</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Redes sociales</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/quito_zoo/">Instagram</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/QuitoZoo/?locale=es_LA">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            @Zoologico-Morales-Ramirez-Pozo
          </div>
        </div>
      </footer>
    </div>
  )
}