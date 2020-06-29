import React from 'react'
// import App from './App'
// import { Component } from 'react'
import {Link} from 'react-router-dom'


export default function RoleList(props) {


    return (
    <>
        {props.roles.map(role =>
         <div>
            <Link to={`/classes/${role.name}`}><p key={role.name}>{role.name}</p></Link>
        </div>
       )}
    </>
   )
  
  }
