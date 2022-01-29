import Actions from "./Actions";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";


function Tweet({
  user,
  timestamp,
  message,
}) {

  return (
    <div className="tweet">
      < ProfileImage image={user.image}/>

      <div className="body">

        < User  user={user.name} handle ={user.handle} timestamp={timestamp}/>

        < Message message={message}/>

        < Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
