import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function RoleList(props) {

  const des = props.RoleDescriptions.find(des => des.roleName === props.match.params.classes)
  
  
  // console.log(des[0].description)
    return (
    <>
        {props.roles.map(role =>
          <div key={role.name}className="role-list">
            <Link to={`/classes/${role.name}`}><p key={role.name}>{role.name}</p></Link>
            <p>{des.roleName}</p> 
            {/* <p>class explanation</p> */}
          </div>
        )}
        
    </>
   )
  
}
  
export default withRouter(RoleList)
