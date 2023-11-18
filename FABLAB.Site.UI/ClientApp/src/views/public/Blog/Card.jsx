import React from 'react'
import { Avatar, AvatarFallback, AvatarImage} from '../../../shared/components/Avatar'
import { Link } from 'react-router-dom'

const Card = ({ title, description, img = "", user }) => {
  return (
    <Link to={"/blog/"+title.replace(/ /g, "-")} className="card">
    <div className="card__header">
      {
        img === "" ? null : <img src={`${img}`} alt="card__image" className="card__image" width="600" />
      }
      
    </div>
    <div className="card__body">
      {/* <span className="tag tag-blue">Technology</span> */}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <div className="card__footer">
      <div className="user">
        <Avatar>
          <AvatarFallback>{user}</AvatarFallback>
        </Avatar>

        <div className="user__info">
          <h5>{user}</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </Link>
  
  )
}

export default Card