import './App.css';
import './Eventos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Imagenes

export default function Eventos() {
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
          <label for="check" className="checkbtn">
            <i>&#9776;</i>
          </label>
          <ul>
            <li><a className="activate " href="../index.php">Inicio</a></li>
            <li><a href="/horarios">Horario</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/anfibios">Anfibios</a></li>
            <li><a href="/aves">Aves</a></li>
          </ul>
        </nav>

      <div className="portada2">

          </div>
          <div className="contenedor-informacion">
              <div className="">
                <h1>Cumpleaños</h1>
                  <p>Celebrar un cumpleaños en el zoológico es una experiencia única que combina diversión, educación y la emoción de estar cerca de la vida salvaje. Los invitados pueden disfrutar de un tour privado, interactuar con animales mediante sesiones de alimentación y encuentros cercanos, y participar en actividades temáticas que resalten la magia del zoológico. La decoración ambiental con motivos de animales, una merienda temática y la oportunidad de capturar recuerdos especiales con fotos junto a los animales contribuyen a crear una celebración inolvidable. Este enfoque no solo celebra el cumpleaños del homenajeado, sino que también fomenta la conciencia y el respeto por la vida salvaje, convirtiendo la ocasión en una experiencia educativa y emocionante para todos los participantes.
      </p>
              </div>
              <div className="">
                  <img src="../img/img5.jpg" alt=""/>
              </div>
          </div>
        <div className="contenedor-informacion">

                <div className="">
                    <img src="../img/img5.jpeg" alt=""/>
                </div>
          <div className="">
                    <h1>Exposiciones</h1>
                      <p>Las exposiciones temporales son eventos o muestras artísticas que se presentan por un período limitado en museos, galerías de arte, zoológicos, centros culturales u otros espacios dedicados a la exhibición de obras o temas específicos. A diferencia de las colecciones permanentes, estas exhibiciones tienen una duración definida y a menudo están diseñadas para destacar temas específicos, artistas contemporáneos, movimientos artísticos, o incluso fenómenos históricos o científicos.</p>
                  </div>
            </div>
        <div className="contenedor-informacion">
                <div className="">
                  <h1>Safaris Fotográficos</h1>
                    <p>Un Safari Fotográfico es una experiencia inolvidable donde los participantes tienen la oportunidad de explorar entornos naturales, como reservas y parques nacionales, con el objetivo de capturar imágenes asombrosas de la vida salvaje en su hábitat natural. Guiados por expertos en fauna y flora, los participantes utilizan equipos fotográficos de alta calidad para inmortalizar momentos únicos, desde majestuosos animales hasta impresionantes paisajes. Este tipo de safari se centra en la fotografía, proporcionando ángulos y oportunidades únicas para capturar imágenes profesionales. A lo largo de la experiencia, se enfatiza el respeto por la naturaleza y las normas de conservación, asegurando una interacción ética con la vida salvaje y la preservación de los entornos naturales.</p>
                </div>
                <div className="">
                    <img src="../img/img4.jpg" alt=""/>
                </div>
            </div>
        <div className="contenedor-informacion">
            <div className="">
              <h1></h1>
              <center>
              <p><b>¡Zoológico SEM!</b></p>
              <p>Descubre la maravillosa diversidad de la vida salvaje en nuestro zoológico. Estamos comprometidos con la conservación, la educación y la fascinación por la naturaleza.</p>
              <p>¿Tienes preguntas o deseas obtener más información? No dudes en contactarnos. Estamos aquí para ayudarte.</p>
              <p>¡Esperamos verte pronto en nuestro zoológico!</p>
              </center>
            </div>
        </div>
        <div className="divForm">
          <form id="formulario" name="form2" METHOD="post" className="formContacto">
            <label for="nombre">Nombres:</label><br/>
            <input type="text" id="nombre" name="nombre" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?(\s[a-zA-Z]+)?(\s[a-zA-Z]+)?$"
              placeholder="Escribe uno o dos nombres" required/><br/>

            <label for="telefono">Teléfono:</label><br/>
            <input type="text" id="telefono" name="telefono" pattern="[0-9]{10}" maxlength="10" placeholder="0981515127"
              required/><br/>

            <label for="cedula">Cédula:</label><br/>
            <input type="text" id="cedula" name="cedula" pattern="[0-9]{10}" maxlength="10" placeholder="0981515127"
              required/><br/>

            <label for="email">Dirección de Email:</label><br/>
            <input type="email" id="email" name="email" placeholder="steven@example.com"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required/><br/>

            <label for="mensaje">Mensaje</label><br/>
            <input type="text" id="mensaje" name="mensaje" required/><br/><br/>

            <center><input type="submit" value="Enviar"/>
              <input type="reset" value="Resetear"/>
            </center>

          </form>
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