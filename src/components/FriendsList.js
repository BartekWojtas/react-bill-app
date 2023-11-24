import Friend from './Friend';

const FriendsList = ({friends, onChooseFriend}) => {
    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <Friend onChooseFriend={onChooseFriend} friend={friend}  key={friend.id}/>
                ))}
            </ul>
        </div>
    )
}

export default FriendsList;