import React from 'react'
import { withRouter } from 'react-router'
 
class AbilityDetails extends React.Component {
  constructor(props) {
    super()

    this.state = {
      expanded: false
    }
  }
  
  
  render() {
    
    const handleClick = () => {
      this.setState(prevState => ({
        expanded: !prevState.expanded
      }));
    }
    
    if (this.state.expanded) {
      return (
        <div>
          {this.props.details.map(info =>
            <div>
              <p id="ability-name">{info.data.name}</p>
              <p>{info.data.desc}<br /></p>
            </div>)}
          <button onClick={handleClick}>Show Less</button>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.details.map(info =>
            <div>
              <p id="ability-name">{info.data.name}</p>
              <p>{info.data.desc[0]}<br /></p>
            </div>)}
          <button onClick={handleClick}>Show More</button>
        </div>
      )
    }
  }
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