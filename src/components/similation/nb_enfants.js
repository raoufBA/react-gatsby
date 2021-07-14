import React from "react"
export default function NBEnfants({ hanleStep }) {
  //console.log(props)
  return(
    <div>
      <h3>Combien d’enfants avez-vous à charge (de 0 à 7) ?</h3>
      <input placeholder="nombre enfant" type="text" name='nbr_enfant' />
      <button onClick={hanleStep}> click</button>
    </div>
  )
}