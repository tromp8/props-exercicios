import React from "react";
import "./App.css";
import CardVideo from "./components/CardVideo.jsx";

export default function App() {
  

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
                <CardVideo name={"Titulo 1"} img={"https://img.freepik.com/fotos-gratis/a-paisagem-bonita-do-sol-da-praia-com-um-barco_1112-212.jpg?w=2000"} user={"Deb"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 2"} img={"https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg"} user={"Sky"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 3"} img={"https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg"} user={"Mary"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 4"} img={"https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp"} user={"Brunna"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 5"} img={"https://fotodicasbrasil.com.br/wp-content/uploads/2014/04/destacada_paisagens2.jpg"} user={"Cecilia"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 6"} img={"https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg"} user={"Ivanor"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>

                <CardVideo name={"Titulo 7"} img={"https://i.ytimg.com/vi/RcSPCtWstSk/maxresdefault.jpg"} user={"Angelo"} icon={"https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg"}/>


          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

