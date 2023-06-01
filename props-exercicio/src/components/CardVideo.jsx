import React from "react";
import InfosUsuario from "./InfosUsuario.jsx";

function CardVideo(props) {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    
  return (
      <div className="box-pagina-principal" onClick={reproduzVideo}>
          <img src={props.img} alt="" />
          <h4>{props.name}</h4>
          <InfosUsuario user={props.user} icon={props.icon}/>

      </div>
  );
}

export default CardVideo;