import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class RoleEquipment extends React.Component {
   

  async componentDidMount() {
   
    try {
      const res = await axios(`https://www.dnd5eapi.co/api/starting-equipment/${this.props.match.params.index.toLowerCase()}`)
      this.setState({
        results: res.data,
        random: Math.floor(Math.random() * res.data.starting_equipment_options.length)
      })
      
    } catch (error) {
      console.log(error)
    }
    console.log(this.state.results.starting_equipment_options[this.state.random].from[Math.floor(Math.random() * this.state.results.starting_equipment_options[0].from.length)])
  }

  render() {
    // const listLength = (this.state.starting_equipment_options)


    if (this.state == null) {
      return `Loading ${this.props.match.params.index}`
    } else if (this.state.results.starting_equipment.length === 0) {
      return <div id="equipment" className="role-cards">
        <h2>A {this.props.match.params.index} can choose from some of the following equipment:</h2>
         
         
      </div>
    } else 

    return (
    <div id="equipment" className="role-cards">
      <h2>Here's an example of {this.props.match.params.index} starting equipment:</h2>
  
        {this.state.results.starting_equipment.map(starting =>
          <p>{ starting.equipment.name  === 'Leather' ? `${starting.equipment.name} armor`  : starting.equipment.name }</p>)}

      <h2>They may also choose some other equipment, such as:</h2>  

        <p>-{this.state.results.starting_equipment_options[this.state.random].from[Math.floor(Math.random() * this.state.results.starting_equipment_options[0].from.length)].equipment.name}</p>
        {/* <p>-{this.state.results.starting_equipment_options[this.state.random].from[Math.floor(Math.random() * this.state.results.starting_equipment_options[1].from.length)]}</p> */}
{/* 
        Choose One from: {this.state.starting_equipment_options.map(option => <p>  - {option[Math.floor(Math.random() * option.length)].from[0].equipment.name}</p>)} */}
    
       {/* You also get: {this.state.starting_equipment.map(pack =>
        
        <p>-{pack.quantity} {pack.item.name}(s)</p>)} */}
    </div>
  )
  }
}

export default withRouter(RoleEquipment)
