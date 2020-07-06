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
        {RoleDetails.filter(des => des.roleName === this.props.match.params.index).map(filteredDescription => <>
          <img id={filteredDescription.roleName} className="role-image" src={filteredDescription.popImageUrl} />
          <div className="role-detail"><h3>So, you wanna play a {this.props.match.params.index}? Here's some info about them:</h3>
          <p className="">{filteredDescription.description}</p></div>
        
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
