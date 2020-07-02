import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import AbilityDetails from './AbilityDetails'

class RoleAbilities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      details:[],
      abilities: [],
    } 
  }
  async componentDidMount() {

      const res = await axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}/levels/1`)
      const info = res.data.features
      const apiCall = info.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
      const deets = await Promise.all(apiCall)
    
      this.setState({
        details: deets,
        abilities: info,
      })
  }
  
  render() {
    if (this.state.abilities == null) {
      return "Loading..."
    }
    return (<div id="abilities" className="role-cards">
      <h3>Level 1 {this.props.match.params.index} abilities</h3> 
      <AbilityDetails abilities={this.state.abilities} details={this.state.details} />
  </div>)
  }

}

export default withRouter(RoleAbilities)
