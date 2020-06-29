import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class RoleInfo extends React.Component {

  async componentDidMount() {

    try {
      const res = await axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}`)

      const roleInfo = res.data
      console.log(roleInfo)
      this.setState(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state == null) {
      return "Loading..."
    }

    return (
      <div>
        <h3>So, you wanna play a {this.props.match.params.index}? Hell Yeah!! Here's some info about them!</h3>
        <p>Hit Die: d{this.state.hit_die}</p>
        <h3 key={this.state.proficiencies.name}>Weapon & armor proficiencies:</h3>{this.state.proficiencies.map(wepProf => 
          <p key ={wepProf.name}> {wepProf.name}</p>
        )}
        <h3 key={this.state.saving_throws}>Saving Throws:</h3> {this.state.saving_throws.map(saves => saves.name + " ")}
        <h3 key={this.state.proficiency_choices}>Skill Proficiencies. Choose {this.state.proficiency_choices[0].choose} of the following{this.state.proficiency_choices[0].from.map(prof => <p key={prof.name}>{prof.name}</p>)}</h3>
      </div >
    )
  }
}


;

export default withRouter(RoleInfo)

    // axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}`)
    //   .then(res => {
    //     this.setState(res.data)
    //   }).catch(err => {
    //     console.log(err)
    //   })
