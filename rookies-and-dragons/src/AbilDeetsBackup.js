import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'

class AbilityDetails extends Component() {
  constructor() {
    super()

    this.state = {
      des: ''
    }

  }
  async componentDidMount() {
    const apiCall = this.state.abilities.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
    const res = await Promise.all(apiCall)
    const des = res.map(info => info.data)
    const des2 = des.map(description => description.desc)
    this.setState({ des })
  }

  render() {
    return (
      <div>
      {this.state.des}

      </div>
    )
  }
}

export default withRouter(AbilityDetails)


// import React from 'react'
// import { withRouter } from 'react-router'
// import axios from 'axios'
 
// function AbilityDetails(props) {

//  async function componentDidMount() {
//    const apiCall = props.abilities.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
//    const res = await Promise.all(apiCall)
//    let des = res.map(info => info.data.desc)
//   //  let des2 = des.map(description => description.desc)
//     console.log(des)
//  }
//   componentDidMount()

//   console.log()
//   return (
//     <div>
//       {}

//     </div>
//   )
// }

// export default withRouter(AbilityDetails)