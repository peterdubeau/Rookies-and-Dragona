import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class RoleEquipment extends React.Component {



  async componentDidMount() {

    try {
      const res = await axios (`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}/starting-equipment`)
      // const filteredChoices  = choices.filter(filteredChoices => filteredChoices === "choices_")
      this.setState(res.data)
      console.log(res.data)

    } catch (error) {
      console.log(error)
    }    
  // const filteredChoices = (arr) => { 
  //   arr.filter(filteredChoices => filteredChoices === "choices_")
  //   }
  //   filteredChoices(this.state)
  }



  render() {
    if (this.state == null) {
      return `Loading ${this.props.match.params.index}`
    }

    return (
    <div className="equipment">
      <h2>Here's an example of {this.props.match.params.index} starting equipment:</h2>
    

      Choose one from:
        <p>(a){this.state.choice_1[0].from[0].item.name}</p> {/*& {this.state.choice_1[0].from[1].item.name}(s)</p> */}
       
        <p>(b){this.state.choice_1[1].from[Math.floor(Math.random() * this.state.choice_1[1].from.length)].item.name}</p>
        
        {/* {this.state.choice_1.map(c1 =>
       <p>- {c1.from[Math.floor(Math.random() * c1.from.length)].item.name}</p> 
      )} */}
      Choose One from: {this.state.choice_2.map(c2 => <p>  - {c2.from[Math.floor(Math.random() * c2.from.length)].item.name}</p>)}
    
      You also get: {this.state.starting_equipment.map(pack =>
        
        <p>-{pack.quantity} {pack.item.name}(s)</p>)}
    </div>
  )
  }
}

export default withRouter(RoleEquipment)
