import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import SkillProf from './SkillProf'

class RoleStats extends React.Component {
  async componentDidMount() {
   
    try {
      const res = await axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}`)
      this.setState(res.data)
      // console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state == null) {
      return "Loading..."
    }

    return (
      <div id="stats" className="role-cards">
        <p>Hit Die: d{this.state.hit_die}</p>
        <h3 key={this.state.proficiencies.name}>Weapon & armor proficiencies:</h3>{this.state.proficiencies.map(wepProf => 
          <p key ={wepProf.name}> {wepProf.name}</p>
        )}
        <h3 key={this.state.saving_throws}>Saving Throws:</h3> {this.state.saving_throws.map(saves => saves.name + " ")}
        <p key={this.state.proficiency_choices}>
          <h3>Skill Proficiencies.<br /> Choose {this.state.proficiency_choices[0].choose} of the following:</h3>
          {/* {this.state.proficiency_choices[0].from.map(prof => <p key={prof.name}>{prof.name}</p>)} */}
        </p>
        <SkillProf skills={this.state.proficiency_choices} />
      </div>
    )
  }
}


export default withRouter(RoleStats)