import TimeStamp from "./TimeStamps";

function User({user, handle, timestamp}) {
    return(
        <div className="top">
        <span className="user">
          <span className="name">{user}</span>
          <span className="handle">{handle}</span>
        </span>

        <TimeStamp timestamp={timestamp}/>
      </div>
    )
}

export default User;