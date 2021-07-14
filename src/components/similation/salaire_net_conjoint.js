import React from "react"
export default function SalaireNetConjoint({hanleStep}) {
  return(
    <div>
      <h3>Quel est le salaire annuel de votre conjoint</h3>
      <input placeholder="salaire annuel" type="text" name='salaire_conjoint' />
      <button onClick={hanleStep}> click</button>
    </div>
  )
}