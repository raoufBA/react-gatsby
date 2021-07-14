import React from "react"
export default function SalaireNet({hanleStep}) {
  return(
    <div>
      <h3>Quel est votre salaire net annuel ?</h3>
      <input placeholder="salaire annuel" type="text" name='salaire' />
      <button onClick={hanleStep} > click</button>
    </div>
  )
}