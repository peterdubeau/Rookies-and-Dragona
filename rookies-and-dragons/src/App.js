import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import RoleList from './RoleList'
import RoleInfo from './RoleInfo'
import RoleStats from './RoleStats'
import RoleEquipment from './RoleEquipment'

import axios from 'axios'

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
      // console.log(res)
  
      
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
      </nav>
      <h1>YEAH LET'S PLAY SOME D&D</h1>
      <main>
        <Route path="/" exact>
          <RoleList roles={this.state.roleList}/>
        </Route>
        <Route path="/classes/:index">
          {/* <RoleInfo url={this.state.roleList} /> */}
          {/* <RoleStats stats={this.state.roleList} /> */}
          <RoleEquipment role={this.state.roleList}/>
        </Route>
        
      </main>
    
        </>)
  
    }
}
  
export default App;
