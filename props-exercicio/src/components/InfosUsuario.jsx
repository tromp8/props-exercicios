import React from "react";

function InfosUsuario(props) {

  return (
    <div>
        <h4>{props.user}</h4>
        <img src={props.icon} alt="" />
    </div>
  );
}

export default InfosUsuario;