import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
//Imagenes

export default function App() {
  return (
    <div>
      <nav className="navNuevo">
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
          <i>&#9776;</i>
        </label>
        <ul>
          <li><Link to="/horarios">Horario</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/anfibios">Anfibios</Link></li>
          <li><Link to="/reptiles">Reptiles</Link></li>
        </ul>
      </nav>
      <nav className="navPr">
        <div className="logo">
          <img src="img/logo.png" alt="Nombre del Logo"/>
        </div>
          <div className="menu"><Link to="/" className="menup ">Inicio</Link></div>
          <div className="menu"><Link to="/categorias" className="menup ">Categorias</Link>
              <ul className="submenu">
                  <li className="submenup"><a href="/anfibios">Anfibios</a></li>
                  <li className="submenup"><a href="/aves">Aves</a></li>
              </ul>

          </div>
          <div className="menu"><a href="/horarios" className="menup " >Horarios</a></div>
          <div className="menu"><a href="/eventos" className="menup ">Evento</a></div>
      </nav>
      <div id="carouselExampleSlidesOnly " className="carousel slide portadaPri" data-bs-ride="carousel">
        <div className="carousel-inner portada-zoo">
          <div className="carousel-item active">
            <img src="./img/zoo-portada1.png" className="d-block w-100" alt="Zoo"/>
          </div>
          <div className="carousel-item">
            <img src="./img/zoo-portada2.jpg" className="d-block w-100" alt="Leon"/>
          </div>
          <div className="carousel-item">
            <img src="./img/zoo-portada3.jpeg" className="d-block w-100" alt="Oso"/>
          </div>
        </div>
      </div>
       <div className="contenedor-informacion">
              <div className="">
                  <p>En Zoologico, la experiencia va más allá de simplemente observar animales; es un viaje a través del tiempo y la imaginación. Cada sección temática es un portal que transporta a los visitantes a épocas remotas y futuros imaginarios, creando una conexión única entre el pasado, el presente y el futuro de la vida animal.
      En Zoologico, cada sección no solo presenta una exhibición de animales, sino que también crea una narrativa envolvente que educa y entretiene. Esta experiencia única brinda a los visitantes la oportunidad de explorar la rica historia y el potencial futuro de la vida animal en un entorno cautivador y emocionante. Zoologico se convierte así en un destino donde la maravilla y la imaginación se entrelazan con la ciencia y la educación
      </p>
              </div>
              <div className="">
                  <img src="./img/img1.jpg" alt=""/>
              </div>
          </div>

      <footer className="page-footer red darken-4">
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
                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/QuitoZoo/?">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container ">
            <p className="center">@Zoologico-Morales-Ramirez-Pozo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}