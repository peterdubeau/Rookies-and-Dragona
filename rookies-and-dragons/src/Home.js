import React from 'react'
import { withRouter, Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home">
      <h1>YEAH LET'S PLAY SOME D&D</h1>
      <h3><Link to="/classes" path="/" exact>Let's find you a class to play!</Link></h3>
      <Link to="/classes" path="/" exact><img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/s1080x2048/61458225_10103917211329052_2485607933379870720_o.jpg?_nc_cat=109&_nc_sid=825194&_nc_ohc=SmF1T3cegNQAX_CHXbu&_nc_ht=scontent-lga3-2.xx&_nc_tp=7&oh=6c8e34c82b257f92661ff5268528ff2d&oe=5F243C78'/></Link>
    </div>
  )
}

export default withRouter(Home)