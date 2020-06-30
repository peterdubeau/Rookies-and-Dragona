import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import RoleDescriptions from './RoleDescriptions.json'
import RoleList from './RoleList'
import RoleInfo from './RoleInfo'
import RoleDetails from './RoleDetails.json'
import RoleStats from './RoleStats'
import RoleEquipment from './RoleEquipment'
import "./App.css"

import axios from 'axios'
import RoleAbilities from './RoleAbilities'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      roleList: [],
      urlList: []
    }
  }

  async componentDidMount() {
    try {
      const res = await axios('https://www.dnd5eapi.co/api/classes')
      const role = res.data.results
      // console.log(res.data)
  
      
      this.setState({
        roleList: role
      })

    } catch (error) {
      console.log(error)
    }
  }


  render() { 
    return (<>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Find another class</Link>
        <h1>YEAH LET'S PLAY SOME D&D</h1>
      </nav>
      <h3><Link to="/:classes">Let's find you a class to play!</Link></h3>
      <main>
        <Route path="/:classes" exact>
          <RoleList roles={this.state.roleList} RoleDescriptions={RoleDescriptions}/>
        </Route>
        <Route path="/classes/:index">
          <RoleInfo url={this.state.roleList} RoleDetails={RoleDetails}/>
          {/* <RoleStats stats={this.state.roleList} /> */}
          {/* <RoleEquipment role={this.state.roleList}/> */}
          {/* <RoleAbilities /> */}
        </Route>
        
      </main>
    
        </>)
  
    }
}
  
export default App;
