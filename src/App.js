import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Footer from './Footer'
import RoleDetails from './RoleDetails.json'
import RoleList from './RoleList'
import RoleInfo from './RoleInfo'
import RoleStats from './RoleStats'
import RoleEquipment from './RoleEquipment'
import Home from './Home'
import "./App.css"

import axios from 'axios'
import RoleAbilities from './RoleAbilities'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      roleList: [],
    }
  }

  async componentDidMount() {
    try {
      const res = await axios('https://www.dnd5eapi.co/api/classes')
      const role = res.data.results

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
        <Link to="/classes" path="/classes/:index" exact>Find another class</Link>
      </nav>
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:classes" exact>
          <RoleList roles={this.state.roleList} RoleDetails={RoleDetails}/>
        </Route>
        <Route path="/classes/:index">
          <RoleInfo url={this.state.roleList} />
          <div className ="role-card-container">
            <RoleStats stats={this.state.roleList} />
            {/* <RoleEquipment role={this.state.roleList}/> 
            API Changed skills and equipment. Will have to update later*/} 
            <RoleAbilities />
          </div>
        </Route>
        <Footer />
      </main>
    
        </>)
  
    }
}
  
export default App;
