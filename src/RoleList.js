import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function RoleList(props) {

  const des = props.RoleDetails
  
  

    return (
      <div className="role-list-container">
        <p className="what-is-a-class"> A characters class determines what your character can do. Your class gives you a series of increasingly powerful abilities that your character can utilize in and out of combat. For example a fighter may wield powerful weapons and armor, where a wizard will have access to magic spells. The list below compares famous characters from Film, TV and video games to a corresponding class. The comparison might not be exact, but it will give you an idea of what a class can do. If you see a character you like, click on link and you can a detailed description of what that class does.</p>
        {props.roles.map(role =>
          <div key={role.name}className="role-list-cards">
            {des.filter(image => image.roleName === role.name).map(filteredImage => <Link to={`/classes/${role.name}`}><img id={role.name}className="role-list-images" src={filteredImage.imageUrl} /></Link> )}
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
