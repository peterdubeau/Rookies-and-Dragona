import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class RoleAbilities extends React.Component {
 
  async componentDidMount() {
    try {
      const res = await axios (`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}/levels/1`)
      this.setState(res.data)
      console.log(res.data)
      

    } catch (error) {
      console.log(error)
    }    
  }

  render() {
    if (this.state == null) {
      return "Loading..."
    }
    return (<div id="abilities" className="role-cards">
      <h3>Level 1 {this.state.class.name}  abilities</h3>
      
      {this.state.features.map(feature => <p key={feature.name}>{feature.name}</p>)}

    
  </div>)
  }

}

export default withRouter(RoleAbilities)
