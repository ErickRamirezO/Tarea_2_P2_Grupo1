import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Imagenes

export default function Horarios() {
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
            <li><a className="activate " href="/">Inicio</a></li>
            <li><a href="/horarios">Horario</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/anfibios">Anfibios</a></li>
            <li><a href="/aves">Aves</a></li>
          </ul>
        </nav>
      
      <div className="portada-horarios">

      </div>
      <div className="contenedor-informacion">
          <div>
              <table>
                  <tr>
                    <td>Lunes-Viernes</td>
                    <td>9:00 am - 5:00pm</td>
                  </tr>
                  <tr>
                    <td>Sabados y Domingos</td>
                    <td>9:00 am - 7:00 pm</td>
                  </tr>
                  <tr>
                    <td>Feriados</td>
                    <td>8:30 am - 7:30pm</td>
                  </tr>
                  <tr>
                    <td>Niños mayores de 6 años</td>
                    <td>3$</td>
                  </tr>
                  <tr>
                    <td>Adultos desde 18-60</td>
                    <td>5$</td>
                  </tr>
                </table>
          </div>
          <div>
              <img src="../img/img2.jpg" alt=""/>
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