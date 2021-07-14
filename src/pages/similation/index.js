import React from "react"
import Layout from "../../components/layout"
import * as styles from "../../styles/similation.module.css"
import Situation from "../../components/similation/situation"
import NBEnfants from "../../components/similation/nb_enfants"
import SalaireNet from "../../components/similation/salaire_net"
import SalaireNetConjoint
  from "../../components/similation/salaire_net_conjoint"

export default class Similation extends React.Component {
  constructor () {
    super()
    this.state = {
      maxStep: 3,
      currentStep: 0
    }
  }


  handleNbStep = (nb = 3) => {

    let maxStep = nb === "4" ? 4 : 3
    this.setState({ maxStep: maxStep })
    if (this.state.currentStep === 0) {
      this.setState({ currentStep: this.state.currentStep + 1 })
    }
  }

  handleNexStep = (event) => {

    if (event) {
      event.preventDefault()
    }
    if (this.state.currentStep < this.state.maxStep) {
      this.setState({ currentStep: this.state.currentStep + 1 })
    }

  }
  handlePrevStep = () => {
    if (this.state.currentStep > 0) {
      this.setState({ currentStep: this.state.currentStep - 1 })
    }
  }

  render () {
    return (
      <Layout>
        <div className={styles.similation}>
          <div>
            {this.state.maxStep}
            <br />
            {this.state.currentStep}
            <br />
            <button onClick={this.handlePrevStep}>Retour</button>
          </div>
          <div>
            <form className={styles.form}>
              <Situation hanleStep={this.handleNbStep} />
              <NBEnfants hanleStep={this.handleNexStep} />
              <SalaireNet hanleStep={this.handleNexStep} />
              <SalaireNetConjoint hanleStep={this.handleNexStep} />
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}