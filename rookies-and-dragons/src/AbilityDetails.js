import React from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'
 
function AbilityDetails(props) {

 async function componentDidMount() {
   const apiCall = props.abilities.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
   const res = await Promise.all(apiCall)
  //  let des = res.map(info => info.data.desc)
  //  let des2 = des.map(description => description.desc)
  console.log(res)
 }
 componentDidMount(props)
  return (
    <div>
      {props.details.map(info =>
        <div>
          <p>{info.data.name}</p>
          <p>{info.data.desc}</p>
          </div>)}
    </div>
  )
}

export default withRouter(AbilityDetails)






















// import React, { Component } from 'react'
// import { withRouter } from 'react-router'
// import axios from 'axios'

// class AbilityDetails extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       description: ''
//     }

//   }
//   componentDidMount = async () => {
//     const apiCall = this.props.abilities.map(abilities => axios(`https://www.dnd5eapi.co${abilities.url}`))
//     const res = await Promise.all(apiCall)
//     const des = res.map(info => info.data)
//     const des2 = des.map(description => description.desc)
    
//     this.setState({ 
//       description: des
//     })
//     console.log(this.props.abilities)
//   }


//   render() {
//     return (
//       <div>
//       {this.state.description}

//       </div>
//     )
//   }
// }

// export default withRouter(AbilityDetails)