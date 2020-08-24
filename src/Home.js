import React from 'react'
import { withRouter, Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home">
      <p className="page-intro">So, you're interested in playing Dungeons & Dragons? Great! Since you're here, I'm guessing your DM said something along the lines of "Think about what class you want to play." If you don't know anything about the game, that can be a confusing statement. Don't worry, I'm here to help. Rookies & Dragons was made to help new players learn what a class is, what class options are available, and give you a surface level idea of what each class can do. Click the link or image below and we'll get started!</p>
      <h3><Link to="/classes" path="/" exact>Let's find you a class to play!</Link></h3>
      <Link to="/classes" path="/" exact><img id="reggie-and-the-boiz" alt="" src='https://res.cloudinary.com/dyrvlnond/image/upload/v1598307776/Rookies%20and%20Dragons/Heroly_r4l3xp.jpg'/></Link>
    </div>
  )
}

export default withRouter(Home)