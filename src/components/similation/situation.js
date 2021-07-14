import React from "react"
import * as PropTypes from "prop-types"

export default class Situation extends React.Component {

  constructor () {
    super()
    this.state = {
      selectedOption: null
    }
  }

  onValueChange = (event) => {
    this.setState(
      {
        selectedOption: event.target.defaultValue
      }
    )
    this.props.hanleStep(event.target.defaultValue)
  }

  render () {

    return (
      <div>
        <h3>Quelle est votre situation familiale ?</h3>
        <div>
          <input type="radio" name="situation_matrimoniale" value="1"
                 checked={this.state.selectedOption === "1"}
                 onChange={this.onValueChange} />
          <label htmlFor="huey">Célibataire</label>
        </div>
        <div>
          <input type="radio" name="situation_matrimoniale"
                 value="2" checked={this.state.selectedOption === "2"}
                 onChange={this.onValueChange} />
          <label htmlFor="dewey">Veuf(ve)</label>
        </div>
        <div>
          <input type="radio" name="situation_matrimoniale"
                 value="3" checked={this.state.selectedOption === "3"}
                 onChange={this.onValueChange} />
          <label htmlFor="louie">Divorcé(e)</label>
        </div>
        <div>
          <input type="radio" name="situation_matrimoniale"
                 value="4" checked={this.state.selectedOption === "4"}
                 onChange={this.onValueChange} />
          <label htmlFor="louie">Marié(e)</label>
        </div>
        <div>
          <input type="radio" id="louie" name="situation_matrimoniale"
                 value="5" checked={this.state.selectedOption === "5"}
                 onChange={this.onValueChange} />
          <label htmlFor="louie">PACS</label>
        </div>
      </div>
    )
  }
}

Situation.propTypes = { props: PropTypes.any }