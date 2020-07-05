import React from 'react'
import { withRouter, Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home">
      <p className="page-intro">So, you're interested in playing Dungeons & Dragons? Great! Since you're here, I'm guessing your DM said something along the lines of "Think about what class you want to play." If you don't know anything about the game, that can be a confusing statement. Don't worry, I'm here to help. Rookies & Dragons was made to help new players learn what a class is, what class options are available, and give you a surface level idea of what each class can do. Click the link or image below and we'll get started!</p>
      <h3><Link to="/classes" path="/" exact>Let's find you a class to play!</Link></h3>
      <Link to="/classes" path="/" exact><img id="reggie-and-the-boiz"src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/s1080x2048/61458225_10103917211329052_2485607933379870720_o.jpg?_nc_cat=109&_nc_sid=825194&_nc_ohc=SmF1T3cegNQAX_CHXbu&_nc_ht=scontent-lga3-2.xx&_nc_tp=7&oh=6c8e34c82b257f92661ff5268528ff2d&oe=5F243C78'/></Link>
    </div>
  )
}

export default withRouter(Home)