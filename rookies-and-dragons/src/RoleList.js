import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function RoleList(props) {

  const des = props.RoleDetails
  
  

    return (
      <div className="role-list-container">
        <h1>Add some text here about what a class actually is</h1>
        {props.roles.map(role =>
          <div key={role.name}className="role-list-cards">
           {des.filter(image => image.roleName === role.name).map(filteredImage => <img className="role-list-images" src={filteredImage.imageUrl} />)}
            <div className="role-name-des">
              <Link to={`/classes/${role.name}`}><p className="role-list-name" key={role.name}>{role.name}</p></Link>
              {des.filter(name => name.roleName === role.name).map(filteredName => <p className="role-list-description">{filteredName.popDescription}</p>)}
            </div> 
          </div>
        )}
        
    </div>
   )
  
}
  
export default withRouter(RoleList)
