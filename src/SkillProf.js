import React from 'react'
import {withRouter} from 'react-router-dom'

function SkillProf(props) {

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)        // quick and easy shuffle function. Taken from:
      const temp = arr[i]                            // https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
      arr[i] = arr[j]
      arr[j] = temp
    } 
  }

  let allSkills = props.skills[0].from
  shuffle(allSkills)


  let numChoice = parseInt(props.skills[0].choose)
  let maxSkills = allSkills.slice(0, numChoice)
  
  function handleClick() {
    shuffle(allSkills)
    console.log(allSkills)
  }
  console.log(allSkills)
  console.log(maxSkills)

  return (
    <div>
      {maxSkills.map(skill => <p>{skill.name}</p>)}
      
   </div>
  )
}

export default withRouter(SkillProf)
