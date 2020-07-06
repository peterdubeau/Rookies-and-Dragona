import React from 'react'
import { Link,  withRouter } from 'react-router-dom'

 function Footer() {
  return (
    <div>
      <ul className="footer">
        <li className="contact" id="name">Peter Du Beau 2020</li>
        <div className="icon-container">
          <li className="contact"><a href="https://github.com/peterdubeau"><img className="footer-icons" src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png"/></a></li>  
          <li className="contact"><a href="https://www.linkedin.com/in/peter-dubeau-09887a120/"><img className="footer-icons" src="https://www.rpost.com/wp-content/uploads/2016/06/Linkedin_circle.svg_.png"/></a></li>
        </div>
      </ul>
    </div>
  )
}

export default withRouter(Footer)
