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
          <img src="../img/logo.png" alt="Nombr/e del Logo"/>
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
            <li><a className="activate " href="/index">Inicio</a></li>
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
                    <h4 className="modal-title" id="myModalLabel">Sapo Común</h4>
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

                            <div className="carousel-inner " role="listbox">
                                <div className="item active">
          <img src="../../img/categoria/anfibios/sapoComun1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Piel rugosa y glandular</h3>
                                        <p>A diferencia de las ranas, los sapos tienen una piel más seca y rugosa. Además, presentan glándulas especializadas en la piel que segregan toxinas como medida de defensa contra depredadores.</p>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src="../img/categoria/anfibios/sapoComun2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Ojos prominentes</h3>
                                        <p>Los sapos comunes generalmente tienen ojos grandes y saltones, lo que les proporciona una visión panorámica y les ayuda a detectar presas o posibles amenazas. Estos ojos prominentes son una característica común en muchos anuros.</p>
                                    </div>
                                </div>

                                <div className="item">
                                    <img src="../img/categoria/anfibios/sapoComun3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                    <div className="carousel-caption d-none d-md-block"><br/>
                                        <h3>Glándulas parótidas</h3>
                                        <p>En la parte posterior de la cabeza, los sapos poseen glándulas parótidas que secretan sustancias tóxicas. Estas toxinas pueden causar irritación en la piel o mucosas de posibles depredadores, br/indando así una htmlForma de defensa pasiva.</p>
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
                                      <img src="../img/categoria/anfibios/sapoCorredor1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block">
                                          <h3>Extremidades posteriores robustas</h3>
                                          <p>Los sapos que son ágiles y tienen habilidades de carrera a menudo tienen extremidades posteriores musculosas y fuertes. Estas les permiten dar saltos largos y rápidos para moverse con agilidad.</p>
                                      </div>
                                  </div>

                                  <div className="item">
                                      <img src="../img/categoria/anfibios/sapoCorredor2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block">
                                          <h3>Piel adaptada a ambientes terrestres: </h3>
                                          <p>A diferencia de algunas ranas que prefieren hábitats acuáticos, los sapos corredores tienden a tener una piel más seca y adaptada a la vida terrestre. Esto les ayuda a moverse eficientemente en entornos más secos y a evitar la deshidratación.</p>
                                      </div>
                                  </div>

                                  <div className="item">
                                      <img src="../img/categoria/anfibios/sapoCorredor3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block"><br/>
                                          <h3>Ojos grandes y alerta</h3>
                                          <p>Los sapos corredores suelen tener ojos grandes y alerta que les proporcionan una visión periférica aguda. Esto les ayuda a detectar presas o peligros en su entorno y les permite reaccionar rápidamente, ya sea para cazar o escapar de posibles amenazas.</p>
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
                      <h4 className="modal-title" id="myModalLabel">Rana común o verde (Rana ridibunda)
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
                                      <img src="../img/categoria/anfibios/ranaComun1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block">
                                          <h3>Coloración verde</h3>
                                          <p> Como su nombr/e indica, la rana común a menudo presenta un color verde br/illante en su piel dorsal, aunque la tonalidad puede variar. Esta coloración verde proporciona camuflaje en ambientes acuáticos y terrestres.</p>
                                      </div>
                                  </div>

                                  <div className="item">
                                      <img src="../img/categoria/anfibios/ranaComun2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block">
                                          <h3>Ojos prominentes y membr/ana timpánica visible </h3>
                                          <p>Las ranas comunes tienen ojos grandes y prominentes que les proporcionan una visión aguda. Además, presentan membr/anas timpánicas bien visibles a ambos lados de la cabeza, que son estructuras auditivas que les permiten detectar sonidos y comunicarse con otras ranas.</p>
                                      </div>
                                  </div>

                                  <div className="item">
                                      <img src="../img/categoria/anfibios/ranaComun3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                      <div className="carousel-caption d-none d-md-block"><br/>
                                          <h3>Vocalización distintiva</h3>
                                          <p>Los machos de rana común son conocidos por su vocalización distintiva durante la temporada de reproducción. Emiten un sonido similar a un "ribbit" para atraer a las hembr/as. Esta vocalización es una característica común en muchas especies de ranas y es esencial para el cortejo.</p>
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
                        <h4 className="modal-title" id="myModalLabel">Ranita meridional (Hyla meridionalis)</h4>
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
                                        <img src="../img/categoria/anfibios/ranaMeridional1.jpg" alt="Ilustracion" className="carrusel_img" style={{height: "270px"}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3>Coloración variable</h3>
                                            <p>La coloración de la ranita meridional puede variar, pero generalmente presenta tonalidades de verde o marrón, lo que le permite camuflarse en su entorno arbóreo.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <img src="../img/categoria/anfibios/ranaMeridional2.jpg" alt="fotografia" className="carrusel_img" style={{height: "270px"}}/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h3>Tamaño pequeño a mediano</h3>
                                            <p>Las ranitas meridionales son relativamente pequeñas en comparación con algunas otras especies de ranas. Los machos suelen ser más pequeños que las hembr/as. Su tamaño puede oscilar entre 3 y 5 centímetros de longitud.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <img src="../img/categoria/anfibios/ranaMeridional3.jpg" alt="pintura" className="carrusel_img" style={{height: "270px"}}/>
                                        <div className="carousel-caption d-none d-md-block"><br/>
                                            <h3>Hábitat arborícola</h3>
                                            <p>Como su nombr/e indica, la ranita meridional es principalmente arbórea. Se encuentra comúnmente en bosques, zonas de matorrales y áreas cercanas a cursos de agua. Pasan la mayor parte de su tiempo en árboles y arbustos.</p>
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
        <div className="cont_imgAnimal"><img src="../img/categoria/anfibios/sapoComun.jpg"
            alt="Imagen del animal" className="animal-image btn btn-primary" data-toggle="modal" data-target="#myModal"/></div>
        <div className="animal-details">
          <h3 className="titulo_animal"> Sapo Común</h3>
          <div className="descripcion_animal">
            <p>El sapo común o sapo europeo (Bufo bufo) es una especie de anfibio anuro de la familia Bufonidae muy habitual en toda clase de hábitats europeos, sobre todo en aguas estancadas: balsas de riego, albercas, etc. al ser más resistente a las aguas insalubres que otras especies de anfibios durante la fase de renacuajo.[cita requerida] Se distribuye por toda Europa salvo Irlanda, Islandia y algunas islas mediterráneas, además de Asia noroccidental y pequeñas partes del noreste africano. Es uno de los anfibios más conocidos, dada su distribución y requerimientos ecológicos laxos. </p>
          </div>
          <div className="localizacion_animal">
            <p className="text_localizacion">Localización</p>
            <div className="tipos_caracteristicas">
            <p>Zonas cultivadas, incluso de secano, también áreas de montaña y cerca de la costa. Durante la época de reproducción es fácil verlos cerca de estanques y charcas.</p>
            </div>
          </div>
          <div className="costumbres">
            <p className="text_costumbres">Costumbres:</p>
            <p>Los sapos son de hábitos nocturnos, pero en la estación de cría se muestran activos también de día. Se alimentan de insectos e invertebrados sobre todo caracoles y babosas. Cuando se siente amenazado se levanta sobre sus cuatro patas para aparentar mayor tamaño.</p>
          </div>
        </div>
      </div>

      <div className="animal-info">
        <div className="cont_imgAnimal"><img src="../img/categoria/anfibios/sapoCorredor.jpg"
            alt="Imagen del animal" className="animal-image btn btn-primary" data-toggle="modal" data-target="#myModal1"/></div>
        <div className="animal-details">
          <h3 className="titulo_animal"> Sapo Corredor</h3>
          <div className="descripcion_animal">
            <p>Representante típico de la familia de los sapos, puede alcanzar hasta los 9 - 10 cm., normalmente menos, sobre todo los machos, que son siempre más pequeños. El sapo corredor tiene las patas traseras bastante cortas, más que otros sapos, por lo que le resulta muy difícil saltar, sin embargo es un buen trepador, y sobre todo buen corredor.</p>
          </div>
          <div className="localizacion_animal">
            <p className="text_localizacion">Localización</p>
            <div className="tipos_caracteristicas">
            <p>Vive en todo tipo de terrenos, preferentemente campos con suelos arenosos, pero en también lugares montañosos y cerca dela costa, se aproxima a las zonas húmedas para reproducirse.</p>
            </div>
          </div>
          <div className="costumbres">
            <p className="text_costumbres">Costumbres:</p>
            <p>El sapo corredor desarrolla su actividad principalmente en las horas crepusculares y nocturnas, de día se entierra en un hoyo que el mismo excava o permanece escondido debajo de una piedra. Se alimenta de todo tipo de insectos, hormigas, escarabajos, también gusanos y larvas.

      En época de cría se acerca a las zonas húmedas, pero cualquier charca le sirve a este sapo para poner sus huevos, hasta 3.000, que son depositados por la hembra ocultos entre la vegetación de las orillas. Los sapos tardan 5 -6 días en nacer, y tras dos meses de metamorfosis salen del agua convertidos en pequeños sapos de tan solo 1,5 cm.</p>
          </div>
        </div>
      </div>

        <div className="animal-info">
          <div className="cont_imgAnimal"><img  src="../img/categoria/anfibios/ranaComun.jpg"
              alt="Imagen del animal" className="animal-image btn btn-primary" data-toggle="modal" data-target="#myModal2"/></div>
          <div className="animal-details">
            <h3 className="titulo_animal"> Rana común o verde (Rana ridibunda)</h3>
            <div className="descripcion_animal">
              <p>Como en casi todos los anfibios, las hembras de rana común son de mayor tamaño que los machos, pudiendo alcanzar estas los 14 - 15 cm. La coloración es muy variada, destacan tanto los tonos pardos como los verdes y mezclas de ellos con distintas manchas oscuras.</p>
            </div>
            <div className="localizacion_animal">
              <p className="text_localizacion">Localización</p>
              <div className="tipos_caracteristicas">
              <p>Todo tipo de zonas húmedas, arroyos, charcas, incluso de aguas residuales o contaminadas. Común en toda la Comunidad Valenciana.</p>
              </div>
            </div>
            <div className="costumbres">
              <p className="text_costumbres">Costumbres:</p>
              <p>La rana verde es un anfibio de hábitos principalmente diurnos, no es difícil de sorprender mientras toma el sol al borde de las charcas donde vive.
        Se alimenta de todo tipo de insectos, que caza con su lengua viscosa. Una semana después de la puesta de los huevos, nacen los renacuajos que, tras sufrir una metamorfosis, se convierten en ranas. Nos encontramos ante una especie endémica de la Península Ibérica y del sur de Francia que, además, ha sido introducida en los dos archipiélagos de nuestro país: islas Canarias e islas Baleares.

        El hábitat de esta especie es sobre cualquier superficie acuática..</p>
            </div>
          </div>
        </div>

          <div className="animal-info">
            <div className="cont_imgAnimal"><img src="../img/categoria/anfibios/ranaMeridional.jpg"
                alt="Imagen del animal" className="animal-imagebtn btn-primary" data-toggle="modal" data-target="#myModal3"/></div>
            <div className="animal-details">
              <h3 className="titulo_animal">Ranita meridional (Hyla meridionalis)</h3>
              <div className="descripcion_animal">
                <p>La última especie por tratar dentro de los anfibios granadinos es la única que presenta hábitos arborícolas. Se trata de la ranita meridional, un anuro bastante peculiar en comparación con las otras especies con las que convive en la provincia. El rasgo que más llama la atención son sus vivos colores, verde, anaranjado, blanco y negro, y si además se la halla sobre una planta, la sorpresa está servida: inmediatamente nos recordará a las ranas tropicales, con las que posee un gran parentesco. Igualmente, cuando escuchamos su canto sin conocerlo, es muy difícil relacionarla con el mismo, ya que resulta  muy estridente y de gran potencia, sobre todo para un animal tan pequeño. Se la suele confundir con la ranita de San Antón, que es muy parecida, pero que no vive en territorio granadino.</p>
              </div>
              <div className="localizacion_animal">
                <p className="text_localizacion">Localización</p>
                <div className="tipos_caracteristicas">
                <p>En riberas de ríos y llanuras bajas húmedas, y también zonas muy calientes y secas con espacios acuáticos.</p>
                </div>
              </div>
              <div className="costumbres">
                <p className="text_costumbres">Costumbres:</p>
                <p>Los machos se congregan en grupos mas o menos grandes, de un número difícil de precisar, aunque pueden ser docenas, a cantar sin cesar en sus charcos al atardecer y de noche.</p>
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