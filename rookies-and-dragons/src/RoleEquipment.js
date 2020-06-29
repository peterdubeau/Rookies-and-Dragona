import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class RoleEquipment extends React.Component {

  async componentDidMount() {
    try {
      const res = await axios (`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}/starting-equipment`)
      this.setState(res.data)
      console.log(res.data)
    
    } catch (error) {
      console.log(error)
    }    
  }


  render() {
    if (this.state == null) {
      return `Loading ${this.props.match.params.index}`
    }
  return(
    <div>
      Choose one from: {this.state.choice_1.map(c1 => <p>{c1.from[0].item.name}</p>)}
      Choose two from: {this.state.choice_2.map(c2 => <p>{c2.from[</p>)}


      <h2>Here's an example of {this.props.match.params.index} starting equipment:</h2>
      {/* <p>{this.state.choice_1[0].from[0].item.name}</p>
      <p>{this.state.choice_1[1].from[0].item.name}</p> */}
    </div>
  )
  }
}

export default withRouter(RoleEquipment)
