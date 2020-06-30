import React from 'react'
import axios from 'axios'
import RoleDetails from './RoleDetails.json'
import { withRouter } from 'react-router-dom'


class RoleInfo extends React.Component {

  async componentDidMount() {

    try {
      const res = await axios(`https://www.dnd5eapi.co/api${this.props.match.url.toLowerCase()}`)
      this.setState(res.data)
          // console.log(this.props.match.params.index)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state == null) {
      return "Loading..."
    }

    return (
      <div className="intro">
        <h3>So, you wanna play a {this.props.match.params.index}? Hell Yeah!! Here's some info about them!:</h3>
        {RoleDetails.filter(des => des.roleName === this.props.match.params.index).map(filteredDescription => <>
          <img src={filteredDescription.imageUrl}/>
          <h4>{filteredDescription.description}</h4>
          </>
        )}
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
