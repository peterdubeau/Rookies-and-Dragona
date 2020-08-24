import React from 'react'
import {withRouter} from 'react-router-dom'

class SkillProf extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: 'ok'
    } 
  }

  render() {
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)        // quick and easy shuffle function. Taken from:
      const temp = arr[i]                            // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
      arr[i] = arr[j]
      arr[j] = temp
    } 
  }

  let allSkills = this.props.skills[0].from
  shuffle(allSkills)

  let numChoice = parseInt(this.props.skills[0].choose)
  let maxSkills = allSkills.slice(0, numChoice)
    
  return (
    <div>
      {maxSkills.map(skill => <p>{skill.name}</p>)}
    </div>
  )
}
}


export default withRouter(SkillProf)
